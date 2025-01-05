import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { ExpressInstrumentation } from "@opentelemetry/instrumentation-express";
import { Resource } from "@opentelemetry/resources";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";
import {
  AlwaysOnSampler,
  NodeTracerProvider,
  SimpleSpanProcessor,
} from "@opentelemetry/sdk-trace-node";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { trace } from "@opentelemetry/api";
import { MongoDBInstrumentation } from "@opentelemetry/instrumentation-mongodb";

export const setUpTracing = (serviceName: string) => {
  const provider = new NodeTracerProvider({
    resource: new Resource({
      [ATTR_SERVICE_NAME]: serviceName,
    }),
    sampler: new AlwaysOnSampler(),
  });
  registerInstrumentations({
    tracerProvider: provider,
    instrumentations: [
      new HttpInstrumentation(),
      new ExpressInstrumentation(),
      new MongoDBInstrumentation(),
    ],
  });

  const exporter = new OTLPTraceExporter({
    url: process.env.COLLECTOR_URL,
  });

  provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
  provider.register();

  return trace.getTracer(serviceName);
};

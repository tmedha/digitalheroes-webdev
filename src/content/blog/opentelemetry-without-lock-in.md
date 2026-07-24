---
title: Adopting OpenTelemetry without vendor lock-in
description: A practical guide to instrumenting your services with OpenTelemetry so you own your data and can switch backends without re-instrumenting.
pubDate: 2026-05-02
author: Diego Fuentes
tags: [opentelemetry, engineering, standards]
---

The most expensive part of any observability setup is not the bill. It is the
instrumentation: the spans, metrics, and log formats woven through your
codebase. Proprietary agents make that work disposable, because it only ever
speaks to one vendor.

## Instrument once, send anywhere

OpenTelemetry (OTel) is a vendor-neutral standard for generating telemetry. You
instrument your code against the OTel API, and an exporter decides where the data
goes. Change vendors and you change one endpoint, not a thousand call sites.

## A minimal setup

1. Add the OTel SDK for your language.
2. Enable auto-instrumentation for your web framework and database client.
3. Point the OTLP exporter at your backend.

That is enough to get traces, metrics, and correlated logs flowing. From there
you add manual spans around the code paths you care most about.

## Where InfoSof fits

InfoSof speaks OTLP natively, so there is no proprietary agent in the path. Your
instrumentation stays portable, and you keep the leverage that comes with owning
your own telemetry. That is the whole point of a standard.

Ready to try it? [Talk to our team](/contact/).

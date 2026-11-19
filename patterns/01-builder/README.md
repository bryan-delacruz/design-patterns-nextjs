# 01 · Builder pattern | Bank transfer form

**Live demo:** [/builder](https://bdlc-01-article-pattern-builder.vercel.app/builder) · [All patterns](../../README.md)

A small, focused example of the **Builder design pattern** in a modern Next.js app. A bank transfer form sends its data to a **Server Action**, which builds and validates a `Transfer` object step by step with a fluent `TransferBuilder`.

## What it shows

- **Builder pattern:** `TransferBuilder` sets each field with a chainable method (`setFromAccount().setToAccount().setAmount()...`) and validates the object in `build()`.
- **Validation at the right step:** `setAmount()` rejects amounts ≤ 0. `build()` rejects a transfer without origin account, destination account or amount.
- **Sensible defaults:** currency starts as `USD`. Reference and message are optional.
- **Server Actions:** the form posts to `processTransfer` (`"use server"`) with no API route.
- **Pending UI with `useTransition`:** the submit button shows "Procesando..." and is disabled while the action runs.

## How it works

```ts
const transfer = new TransferBuilder()
  .setFromAccount(data.fromAccount)
  .setToAccount(data.toAccount)
  .setAmount(parseFloat(data.amount))
  .setCurrency(data.currency)
  .setReference(data.reference)
  .setMessage(data.message)
  .build();
```

## Files

```
transfer-builder.ts   Transfer type and TransferBuilder class
transfer-action.ts    Server Action that uses the builder
transfer-form.tsx     Transfer form (client component)
```

The route that renders the demo is [`app/builder/page.tsx`](../../app/builder/page.tsx).

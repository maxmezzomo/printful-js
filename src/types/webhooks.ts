export type WebhookInfo = {
  readonly url: string;
  readonly types: readonly string[];
  readonly params: ReadonlyArray<string | number | boolean>;
};

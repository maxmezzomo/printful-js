import { RequireOnly } from './util';

type FileStatus = 'ok' | 'waiting' | 'failed';

export type File = {
  readonly id: number;
  readonly type: string;
  readonly hash: string;
  readonly url: string;
  readonly filename: string;
  readonly mime_type: string;
  readonly size: number;
  readonly width: number;
  readonly height: number;
  readonly dpi: number;
  readonly status: FileStatus;
  readonly created: number;
  readonly thumbnail_url: string;
  readonly preview_url: string;
  readonly visible: boolean;
};

export type InputFile = RequireOnly<File, 'url'>;

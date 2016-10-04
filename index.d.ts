declare namespace jsonp {
  interface Options {
    param?: string;
    timeout?: number;
    prefix?: string;
    name?: string;
  }
  interface Callback {
    (err: Error, data: any): void;
  }
  interface Cancel {
    (): void;
  }
}

declare function jsonp(url: string, params?: jsonp.Options, cb?: jsonp.Callback): jsonp.Cancel;

export = jsonp;

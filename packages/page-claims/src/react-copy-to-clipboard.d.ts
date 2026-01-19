// Copyright 2017-2026 @pezkuwi/app-claims authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Type override for react-copy-to-clipboard to fix React types compatibility
declare module 'react-copy-to-clipboard' {
  import * as React from 'react';

  export interface Options {
    debug?: boolean;
    message?: string;
    format?: string;
  }

  export interface Props {
    children: React.ReactNode;
    text: string;
    onCopy?(text: string, result: boolean): void;
    options?: Options;
  }

  declare const CopyToClipboard: React.FC<Props>;
  export default CopyToClipboard;
}

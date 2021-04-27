import { SDK_VERSION } from '@sentry/core';
import { Package } from '@sentry/types';

import { NextjsOptions } from './nextjsOptions';

const SDK_NAME = 'sentry.javascript.nextjs';
const PACKAGE_NAME_PREFIX = 'npm:@sentry/';

/**
 * A builder for the SDK metadata in the options for the SDK initialization.
 */
export class MetadataBuilder {
  private _options: NextjsOptions;
  private _packageNames: string[];

  constructor(options: NextjsOptions, packages: string[]) {
    this._options = options;
    this._packageNames = packages;
  }

  public addSdkInfo(): void {
    this._options._internal = this._options._internal || {};
    this._options._internal.sdk = {
      name: SDK_NAME,
      version: SDK_VERSION,
      packages: this._getPackages(),
    };
  }

  private _getPackages(): Package[] {
    return this._packageNames.map((pkgName: string) => {
      return {
        name: PACKAGE_NAME_PREFIX + pkgName,
        version: SDK_VERSION,
      };
    });
  }
}

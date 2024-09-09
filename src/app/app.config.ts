import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import {
  remixPaintBrushFill,
  remixPaintBrushLine,
  remixPaintFill,
  remixPaintLine,
  remixPantoneFill,
  remixPantoneLine,
} from '@ng-icons/remixicon';
import {
  hugePaintBoard,
  hugePaintBrush01,
  hugePaintBrush04,
} from '@ng-icons/huge-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNgIconsConfig({ size: '1.5em' }),
    provideIcons({
      remixPaintBrushFill,
      remixPaintBrushLine,
      remixPaintFill,
      remixPaintLine,
      remixPantoneFill,
      remixPantoneLine,
      hugePaintBoard,
      hugePaintBrush01,
      hugePaintBrush04,
    }),
  ],
};

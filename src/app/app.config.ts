import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import {
  remixAddCircleFill,
  remixArrowLeftDoubleLine,
  remixArrowLeftRightLine,
  remixCloseCircleLine,
  remixPaintBrushFill,
  remixPaintBrushLine,
  remixPaintFill,
  remixPaintLine,
  remixPantoneFill,
  remixPantoneLine,
  remixDeleteBack2Line, remixArrowRightDoubleLine,
} from '@ng-icons/remixicon';
import {
  hugePaintBoard,
  hugePaintBrush01,
  hugePaintBrush04,
} from '@ng-icons/huge-icons';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
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
      remixArrowLeftRightLine,
      remixArrowLeftDoubleLine,
      remixCloseCircleLine,
      remixAddCircleFill,
      remixDeleteBack2Line,
      remixArrowRightDoubleLine,
    }),
    provideAnimationsAsync(),
  ],
};

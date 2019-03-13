import { UniversalStorage } from '@core/storage/server.storage';
import { AppStorage } from '@core/storage/universal.inject';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from '@app/app.module';
import { AppComponent } from '@app/app.component';

@NgModule({
  imports: [AppModule, ServerModule, ModuleMapLoaderModule],
  bootstrap: [AppComponent],
  providers: [{ provide: AppStorage, useClass: UniversalStorage }]
})
export class AppServerModule {}

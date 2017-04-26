import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule }    from '@angular/http';

import { VideoPage } from '../pages/video/video';
import { SettingsPage } from '../pages/settings/settings';
import { DevicePage } from '../pages/device/device';
import { TabsPage } from '../pages/tabs/tabs';
import { DeviceDetailPage } from '../pages/device/device-detail/deviceDetail';
import { BuildClassModalPage } from '../pages/device/device-detail/modal/buildClassModal';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
//service
import { DeviceService } from './common/service/device.service';
import { BuildClassService } from './common/service/buildClass.service';
//pipe
import { BuildPipe } from './common/pipe/device.pipe';


@NgModule({
  declarations: [
    MyApp,
    VideoPage,
    SettingsPage,
    DevicePage,
    TabsPage,
    DeviceDetailPage,
    BuildClassModalPage,
    BuildPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    IonicModule.forRoot(MyApp,{
      backButtonText: '返回',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VideoPage,
    SettingsPage,
    DevicePage,
    TabsPage,
    DeviceDetailPage,
    BuildClassModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeviceService,
    BuildClassService
  ]
})
export class AppModule {}

import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { MoveAppHipsterSharedModule, UserRouteAccessService } from './shared';
import { MoveAppHipsterHomeModule } from './home/home.module';
import { MoveAppHipsterAdminModule } from './admin/admin.module';
import { MoveAppHipsterAccountModule } from './account/account.module';
import { MoveAppHipsterEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        MoveAppHipsterSharedModule,
        MoveAppHipsterHomeModule,
        MoveAppHipsterAdminModule,
        MoveAppHipsterAccountModule,
        MoveAppHipsterEntityModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class MoveAppHipsterAppModule {}

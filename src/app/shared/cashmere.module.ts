import { NgModule } from '@angular/core';
import {
    AccordionModule,
    AppSwitcherModule,
    BreadcrumbsModule,
    BannerModule,
    ButtonModule,
    ButtonToggleModule,
    CheckboxModule,
    ChipModule,
    DatepickerModule,
    DateRangeModule,
    DrawerModule,
    FormFieldModule,
    IconModule,
    InputModule,
    ListModule,
    ModalModule,
    NavbarModule,
    PaginationModule,
    PicklistOldModule,
    PicklistModule,
    PipesModule,
    PopModule,
    ProgressIndicatorsModule,
    RadioButtonModule,
    ScrollNavModule,
    SelectModule,
    SortModule,
    StepperModule,
    SubnavModule,
    TabsModule,
    TableModule,
    TileModule,
    ToasterModule,
    TypeformSurveyModule
} from '@healthcatalyst/cashmere';
import {ChangeCasePipeModule} from '@bit/healthcatalyst.cashmere.change-case-pipe';

@NgModule({
    exports: [
        AccordionModule,
        AppSwitcherModule,
        BreadcrumbsModule,
        BannerModule,
        ButtonModule,
        ButtonToggleModule,
        CheckboxModule,
        ChipModule,
        DatepickerModule,
        DateRangeModule,
        DrawerModule,
        FormFieldModule,
        IconModule,
        InputModule,
        ListModule,
        ModalModule,
        NavbarModule,
        PaginationModule,
        PicklistOldModule,
        PicklistModule,
        PipesModule,
        PopModule,
        ProgressIndicatorsModule,
        RadioButtonModule,
        ScrollNavModule,
        SelectModule,
        SortModule,
        StepperModule,
        SubnavModule,
        TableModule,
        TabsModule,
        TileModule,
        ToasterModule,
        TypeformSurveyModule,
        ChangeCasePipeModule
    ]
})
export class CashmereModule { }

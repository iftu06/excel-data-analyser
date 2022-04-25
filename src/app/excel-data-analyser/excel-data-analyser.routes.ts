import {Routes} from "@angular/router";
import {DataIngestionComponent} from "./data-ingestion/data-ingestion.component";
import {DataMappingComponent} from "./data-mapping/component/data-mapping.component";
import {DataAnalysisComponent} from "./data-analysis/data-analysis.component";

export const routes: Routes = [

    {
      path: '', component: DataIngestionComponent
    },

    {
      path: 'dataMapping', component: DataMappingComponent
    },
    {
      path: 'dataAnalysis', component: DataAnalysisComponent
    }

];

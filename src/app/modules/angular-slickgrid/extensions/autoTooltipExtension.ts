import { Injectable } from '@angular/core';
import { SharedService } from '../services/shared.service';

// using external non-typed js libraries
declare var Slick: any;

@Injectable()
export class AutoTooltipExtension {
  constructor(private sharedService: SharedService) {}

  register() {
    const plugin = new Slick.AutoTooltips(this.sharedService.gridOptions.autoTooltipOptions || {});
    this.sharedService.grid.registerPlugin(plugin);

    return plugin;
  }
}

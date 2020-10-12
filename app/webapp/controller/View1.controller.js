sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/FilterType",
    "sap/ui/model/Sorter",
    "sap/viz/ui5/format/ChartFormatter",
    "sap/m/MessageBox"
], function (Controller,FilterType, Sorter, ChartFormatter, MessageBox) {
	"use strict";

	return Controller.extend("com.app.app.controller.View1", {
		 onInit: function () {
          //SET ROUTE HANDLER
          // this._oRouter = sap.ui.core.UIComponent.getRouterFor(this); //Router
          // this._oRouter.attachRouteMatched(this._handleRouteMatched, this);

          // var sOrigin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
          // var bamOdataServiceUrl = sOrigin + "/v2/catalog";
          // var odataModel = new sap.ui.model.odata.ODataModel(bamOdataServiceUrl, true);
          // odataModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
          // odataModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
          // odataModel.resetChanges();
          // sap.ui.getCore().setModel(odataModel, "srv_v21");

          // var oView = this.getView();
          // oView.setModel(odataModel);

          //var odataModel = new sap.ui.model.odata.ODataModel;

          //SET DATA MODEL
          var oModel = this.getOwnerComponent().getModel("staticData");
          var oView = this.getView();
          oView.setModel(oModel);

          var oTable = oView.byId("main_SmartTable");
          var entity = "ActionUsage";
          oTable.setModel(oModel);
          oTable.setEntitySet(entity);

          // var oTable = oView.byId("main_SmartTable");
          // var entity = "SoDViolations";
          // //Set table
          // oTable.setModel(oModel);
          // oTable.setEntitySet(entity);

          // var that = this;
          // var filtersParametersData = {
          // 	"SYSTEM": [],
          // 	"RANGETYPETEXT": [],
          // 	"RANGEVALUE": [],
          // 	"RANGEVALUEDESC": [],
          // 	"SIMILARITYPOINT": [],
          // 	"SIMILPERC": [],
          // 	"ROLE1" :[],
          // 	"ROLE2" :[],
          // 	"ROLEDESC1" :[],
          // 	"ROLEDESC2" :[],
          // 	"TCODES" :[],
          // 	"TCODEDESC" :[],
          // 	"ROLE1INDICATOR" :[],
          // 	"ROLE2INDICATOR" :[]
          // };
          // var oModel = new sap.ui.model.json.JSONModel();
          // oModel.setData(filtersParametersData);
          // this.getOwnerComponent().setModel(oModel, "filtersParameters");

          // //Call to fetch the Dropdown values for Filters
          // var sEntitySet = "BAM_RANGEVALUEOPTION_SIMILARITYs";
          // odataModel.read(sEntitySet, {

          // 	success: function (oData, response) {
          // 		var obj = oData.results;
          // 		var oModel = that.getOwnerComponent().getModel("filtersParameters");
          // 		for (var i = 0; i < obj.length; i++) {
          // 			oModel.getData().SYSTEM.push({
          // 				SystemVal: obj[i].SYSTEM
          // 			});
          // 			oModel.getData().RANGETYPETEXT.push({
          // 				RangeTypeTextVal: obj[i].RANGETYPETEXT
          // 			});
          // 			oModel.getData().RANGEVALUEDESC.push({
          // 				RangeValueDescVal: obj[i].RANGEVALUEDESC,
          // 				RANGETYPETEXT: obj[i].RANGETYPETEXT
          // 			});

          // 			oModel.getData().RANGEVALUE.push({
          // 				RangeValueVal: obj[i].RANGEVALUE,
          // 				RANGEVALUEDESC: obj[i].RANGEVALUEDESC,
          // 			});

          // 		}
          // 		var tempSystem = {};

          // 		oModel.getData().SYSTEM = oModel.getData().SYSTEM.filter(function (currentObject) {
          // 			if (currentObject.SystemVal in tempSystem) {
          // 				return false;
          // 			} else {
          // 				tempSystem[currentObject.SystemVal] = true;
          // 				return true;
          // 			}
          // 		});
          // 		var tempRangeTypeText = {};

          // 		oModel.getData().RANGETYPETEXT = oModel.getData().RANGETYPETEXT.filter(function (currentObject) {
          // 			if (currentObject.RangeTypeTextVal in tempRangeTypeText) {
          // 				return false;
          // 			} else {
          // 				tempRangeTypeText[currentObject.RangeTypeTextVal] = true;
          // 				return true;
          // 			}
          // 		});

          // 		var tempRangeValueDesc = {};

          // 		oModel.getData().RANGEVALUEDESC = oModel.getData().RANGEVALUEDESC.filter(function (currentObject) {
          // 			if (currentObject.RangeValueDescVal in tempRangeValueDesc) {
          // 				return false;
          // 			} else {
          // 				tempRangeValueDesc[currentObject.RangeValueDescVal] = true;
          // 				return true;
          // 			}
          // 		});

          // 		var tempRangeValue = {};

          // 		oModel.getData().RANGEVALUE = oModel.getData().RANGEVALUE.filter(function (currentObject) {
          // 			if (currentObject.RangeValueVal in tempRangeValue) {
          // 				return false;
          // 			} else {
          // 				tempRangeValue[currentObject.RangeValueVal] = true;
          // 				return true;
          // 			}
          // 		});

          // 		oModel.updateBindings();
          // 	},
          // 	error: function (error) {
          // 		MessageBox.error("No Data found.");
          // 	}
          // });
        },
/************** navigation to other views *************/
        onRoleAnalysisPress: function (Evt) {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("RouteView2");
        },
        onTopLeftPress: function (Evt) {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("RouteView3");
        },
        onBottomLeftPress: function (Evt) {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("RouteView4");
        },

        onAfterRendering: function () {
          var oControl,
            oView = this.getView();
          var oModel = oView.getModel();

          var oCombobox = oView.byId("filterSystem");
          //	oCombobox.setModel(oModel);
		//   oCombobox.setSelectedKey("All");
		  this.getOwnerComponent().getModel("staticData").setProperty("/SystemSelectedKey","All");

          oCombobox = oView.byId("filterCompanyCode");
          oCombobox.setSelectedKey("US20");
          oCombobox = oView.byId("filterAcctGrp");
          oCombobox.setSelectedKey("SCPL");
          oCombobox = oView.byId("filterRangeTypeText");
		  oCombobox.setSelectedKey("MONTH");
		  oView.byId("filterRangeTypeText").fireSelectionChange();
          oCombobox = oView.byId("filterRangeValueDesc");
          oCombobox.setSelectedKey("JAN-2020");

          //Set Column chart properties
          oControl = oView.byId("main_pie_chart");
          oControl.setVizProperties({
            legend: {
              title: {
                visible: false,
              },
            },
            title: {
              visible: false,
            },
            legendGroup: {
              layout: {
                position: "bottom",
              },
            },
            plotArea: {
              dataLabel: {
                visible: false,
              },
              colorPalette: ["#ffcc00"],
            },
          });

          //Set Horizontal chart properties
          oControl = oView.byId("main_pie_chart2");
          oControl.setVizProperties({
            legend: {
              title: {
                visible: false,
              },
            },
            title: {
              visible: false,
            },
            legendGroup: {
              layout: {
                position: "bottom",
              },
            },
            plotArea: {
              dataLabel: {
                visible: false,
              },
              colorPalette: ["#ffcc00"],
            },
          });

          //Set Stacked Combination chart properties
          oControl = oView.byId("main_line_chart");
          oControl.setVizProperties({
            title: {
              visible: false,
            },
            valueAxis: {
              visible: true,
              title: {
                visible: true,
              },
            },
            categoryAxis: {
              visible: true,
            },
            legendGroup: {
              layout: {
                // keep legend to bottom of the chart
                position: "bottom",
              },
            },

            timeAxis: {
              levels: ["year", "month"],
              title: {
                visible: false,
              },
              interval: {
                unit: "",
              },
            },
            interaction: {
              syncValueAxis: false,
            },
            plotArea: {
              dataLabel: {
                visible: false,
                formatString:
                  sap.viz.ui5.format.ChartFormatter.DefaultPattern
                    .STANDARDINTEGER,
                hideWhenOverlap: true,
              },
              dataPoint: {
                invalidity: "ignore",
              },
              window: {
                start: "firstDataPoint",
                end: "lastDataPoint",
              },
              dataShape: {
                primaryAxis: ["line", "bar", "bar", "bar"],
              },
              colorPalette: ["#666666", "#ffcc00"],
            },
          });

          var oSmartTable = this.getView().byId("main_SmartTable");
          var oTable = oSmartTable.getTable();
          var th = oTable.getGrowingThreshold();
          oSmartTable.getTable().setGrowingThreshold(6);

          this.onFilterChange();
        },
/***** binding chart based on filters ***********/
        onFilterChange: function (Data) {
          var oControl,
            oView = this.getView();

          var valueSelectedSystem = this.byId("filterSystem").getSelectedKey();
          var oFilters = [];
          var oFilters_temp = [];
          var oFilter = new sap.ui.model.Filter(
            "SYSTEM",
            sap.ui.model.FilterOperator.EQ,
            valueSelectedSystem
          );
          oFilters.push(oFilter);

          var valueSelectedCC = this.byId("filterCompanyCode").getSelectedKey();
          if (valueSelectedCC !== "") {
            var oFilter = new sap.ui.model.Filter(
              "COMPANYCODE",
              sap.ui.model.FilterOperator.EQ,
              valueSelectedCC
            );
            oFilters.push(oFilter);
          }
          var valueSelectedAcctGrp = this.byId(
            "filterAcctGrp"
          ).getSelectedKey();
          if (valueSelectedAcctGrp !== "") {
            var oFilter = new sap.ui.model.Filter(
              "ACCTGRP",
              sap.ui.model.FilterOperator.EQ,
              valueSelectedAcctGrp
            );
            oFilters.push(oFilter);
          }
          var valueSelectedPeriodValue = this.byId(
            "filterRangeValueDesc"
          ).getSelectedKey();
          if (valueSelectedPeriodValue !== "") {
            var oFilter = new sap.ui.model.Filter(
              "PERIODVALUE",
              sap.ui.model.FilterOperator.EQ,
              valueSelectedPeriodValue
            );
            oFilters.push(oFilter);
          }

          var oFilter = new sap.ui.model.Filter(
            "ROLESIZE",
            sap.ui.model.FilterOperator.EQ,
            "50 <"
          );
          oFilters_temp.push(oFilter);
this.getOwnerComponent().getModel("staticData").setProperty("/globalFilter",oFilters);
          //Filter for Tile
          // oView.byId("main_bam_tile").getBinding("tileContent").filter(oFilters_temp, FilterType.Application);

          var oControl1 = oView.byId("main_pie_chart");
          var newDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [
              {
                axis: 1,
                name: "FieldType",
                value: "{FieldType}",
              },
            ],
            measures: [
              {
                name: "RoleSizeValue",
                value: "{ROLESIZEVALUE}",
              },
            ],
            data: {
              path: "/RoleSizebyTcode",
              filters: oFilters,
            },
          });
          oControl1.setVizProperties({
            valueAxis: { title: { visible: true, text: "Missing Values" } },
          });
          oControl1.setDataset(newDataset);
          var oPopOver = this.getView().byId("idPiePopOver");
          oPopOver.connect(oControl1.getVizUid());
          oPopOver.setFormatString(ChartFormatter.DefaultPattern.STANDARDFLOAT);

          oControl1 = oView.byId("main_line_chart");
          var newDataset1 = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [
              {
                name: "Period",
                value: "{MONTH}",
              },
            ],
            measures: [
              {
                name: "Revenue",
                value: "{REVENUE}",
                // type: "number"
              },
              {
                name: "Bank Detail",
                value: "{ROLESIZEVALUE}",
                // type: "number"
              },
              {
                name: "Payment Terms",
                value: "{ROLESIZEVALUE2}",
                // type: "number"
              },
              {
                name: "Bank No.",
                value: "{ROLESIZEVALUE3}",
                // type: "number"
              },
            ],
            data: {
              path: "/RoleSizebyTcode",

              filters: oFilters,
            },
          });
          oControl1.setVizProperties({
            valueAxis: { title: { visible: true, text: "Missing Values" } },
          });
          oControl1.setDataset(newDataset1);

          var oControl2 = oView.byId("main_pie_chart2");
          var newDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [
              {
                axis: 1,
                name: "Years",
                value: "{VIOLATIONTYPE}",
              },
            ],
            measures: [
              {
                name: "Suppliers",
                value: "{VIOLATIONVALUE}",
              },
            ],
            data: {
              path: "/RolesInherentSoD",
              filters: oFilters,
            },
          });

          oControl2.setDataset(newDataset);
          var oPopOver = this.getView().byId("idPiePopOver2");
          oPopOver.connect(oControl1.getVizUid());
          oPopOver.setFormatString(ChartFormatter.DefaultPattern.STANDARDFLOAT);

          //Filter for Table
          //oView.byId("idTableSimilarDetails").getBinding("items").filter(oFiltersSmartTable, FilterType.Application);

          // var valueSelectedSystem = this.byId("filterSystem").getSelectedKey();
          // var valueSelectedRangeTypeText = this.byId("filterRangeTypeText").getSelectedKey();
          // var valueSelectedRangeValueDesc = this.byId("filterRangeValueDesc").getSelectedKey();
          // var trendlength = 3;

          // oControl = oView.byId("idSlider");
          // var oFilterSystem = new sap.ui.model.Filter("SYSTEM", sap.ui.model.FilterOperator.EQ, valueSelectedSystem);
          // var oFilterRangeTypeText = new sap.ui.model.Filter("RANGETYPETEXT", sap.ui.model.FilterOperator.EQ, valueSelectedRangeTypeText);
          // var oFilterRangeValueDesc = new sap.ui.model.Filter("RANGEVALUEDESC", sap.ui.model.FilterOperator.EQ, valueSelectedRangeValueDesc);
          // var percentSelected = oControl.getValue("idSlider");
          // var oFilterfilterSimilarperc = new sap.ui.model.Filter("SIMILARITYPOINT", sap.ui.model.FilterOperator.EQ, percentSelected);
          // var oFilterfilterperc = new sap.ui.model.Filter("SIMILPERC", sap.ui.model.FilterOperator.EQ, percentSelected);
          // var oFilters = [];
          // var oFiltersSmartTable = [];
          // this.getOwnerComponent().getModel("filtersParameters").setProperty("/System", valueSelectedSystem);

          // if (valueSelectedSystem !== "") {
          // 	oFiltersSmartTable.push(oFilterSystem);
          // 	oFiltersSmartTable.push(oFilterfilterperc);
          // }

          // // if (valuefilterSimilarperc !== "") {
          // // 	oFiltersSmartTable.push(oFilterfilterSimilarperc);
          // // }
          // //if (valueSelectedSystem !== "" && valueSelectedRangeTypeText !== "" && valueSelectedRangeValueDesc !== "" &&  oFilterfilterSimilarperc !== "" ) {
          // oFilters.push(oFilterSystem,oFilterRangeTypeText,oFilterRangeValueDesc,oFilterfilterSimilarperc);

          // oControl = oView.byId("filterRangeValueDesc");
          // var sPeriod = oView.byId("filterRangeTypeText").getSelectedKey();
          // var oFilter = new sap.ui.model.Filter("RANGETYPETEXT", sap.ui.model.FilterOperator.EQ, sPeriod);

          // // oControl = oView.byId("filterRangeValueDesc");
          // // var sPeriod = oView.byId("RangeValueDescVal").getSelectedKey();
          // // var oFilter = new sap.ui.model.Filter("RANGEVALUE", sap.ui.model.FilterOperator.EQ, sPeriod);

          // //&& valueSelectedRangeTypeText === "" && valueSelectedRangeValueDesc === ""
          // if (valueSelectedSystem === "ALL"  ) {
          // 	oFilters = [];
          // 	oFiltersSmartTable = [];
          // 	oFilters.push(oFilterfilterSimilarperc);
          // 	oFiltersSmartTable.push(oFilterfilterperc);
          // }

          // oControl.getBinding("items").filter(oFilter, FilterType.Application);

          // console.log(oFilters);
          // var oControl1 = oView.byId("main_pie_chart");
          // var newDataset = new sap.viz.ui5.data.FlattenedDataset({
          // 	dimensions: [{
          // 		axis: 1,
          // 		name: 'roleSize',
          // 		value: "{roleSize}"
          // 	}],
          // 	measures: [{
          // 		name: 'RoleSizeValue',
          // 		value: '{RoleSizeValue}',
          // 	}],
          // 	data: {
          // 		path: "/RoleSizebyTcode",
          // 		filters: oFilters
          // 			//parameters: {select: 'CONNECTOR,STATUS,TOTAL_RISKS'}
          // 	}

          // });

          // oControl1.setDataset(newDataset);

          // var oPopOver = this.getView().byId("idPiePopOver");
          // oPopOver.connect(oControl1.getVizUid());
          // oPopOver.setFormatString(ChartFormatter.DefaultPattern.STANDARDFLOAT);

          // var valueRole2 = oView.byId("idComboBoxRole2").getSelectedKey();
          // var	oComboBoxRangeRole2 = oView.byId("idComboBoxRole2");
          // if (valueRole2 !== "") {
          // 	oComboBoxRangeRole2.setSelectedKey("");
          // }
          // oControl = oView.byId("filterRangeValueDesc");
          // var sPeriod = oView.byId("filterRangeValueDesc").getSelectedKey();
          // var oFilter = new sap.ui.model.Filter("RANGETYPETEXT", sap.ui.model.FilterOperator.EQ, sPeriod);

          // var oFilters2 = this.getCustomPathForLineChart(valueSelectedSystem, valueSelectedRangeTypeText, "2016" , percentSelected, trendlength);

          // oControl1 = oView.byId("main_line_chart");
          // var newDataset1 = new sap.viz.ui5.data.FlattenedDataset({
          // 	dimensions: [{
          // 		name: 'CATEGORY',
          // 		value: "{RANGEVALUEDESC}"
          // 	}, {
          // 		name: 'RANGEVALUE',
          // 		value: "{RANGEVALUE}"
          // 	}, {
          // 		name: 'VALUETYPE',
          // 		value: "{VALUETYPE}"
          // 	}],
          // 	measures: [{
          // 		name: 'VALUE',
          // 		value: '{VALUE}',
          // 		type: "number"
          // 	}],
          // 	data: {
          // 		path:  "/BAM_ROLESIMILARITYs",
          // 		filters: oFilters2
          // 	}
          // });

          // oControl1.setDataset(newDataset1);

          //Filter for Tile
          // oView.byId("main_bam_tile").getBinding("tileContent").filter(oFilters, FilterType.Application);
          //Filter for Table
          //	oView.byId("idTableSimilarDetails").getBinding("items").filter(oFiltersSmartTable, FilterType.Application);
        },
        onCompanyCodeSelectionChange: function (oEvent) {
          this.onFilterChange();
        },
        onAcctGroupSelectionChange: function (oEvent) {
          this.onFilterChange();
        },
        onSystemSelectionChange: function (oEvent) {
          var oView = this.getView();
          var oComboBoxRangeTypeText = oView.byId("filterRangeTypeText");
          oComboBoxRangeTypeText.setSelectedKey("");
          var valueRangeTypeText = oView.byId("filterRangeValueDesc");
          oComboBoxRangeTypeText.setSelectedKey("");
          this.onFilterChange();

          //var oView = this.getView();
          //var valueSelectedSystem = this.byId("filterSystem").getSelectedKey();
          //var oFilter = new sap.ui.model.Filter("system", sap.ui.model.FilterOperator.EQ, valueSelectedSystem);
          // var oControl1 = oView.byId("main_pie_chart");
          // var oFilters = [];
          // oFilters.push(oFilter);
          // var newDataset = new sap.viz.ui5.data.FlattenedDataset({
          // 	dimensions: [{
          // 		axis: 1,
          // 		name: 'roleSize',
          // 		value: "{roleSize}"
          // 	}],
          // 	measures: [{
          // 		name: 'RoleSizeValue',
          // 		value: '{RoleSizeValue}',
          // 	}],
          // 	data: {
          // 		path: "/RoleSizebyTcode",
          // 		filters: oFilters
          // 			//parameters: {select: 'CONNECTOR,STATUS,TOTAL_RISKS'}
          // 	}

          // });

          // oControl1.setDataset(newDataset);

          //			this.onFilterChange(valueSelectedSystem);

          // this.getOwnerComponent().getModel("filtersParameters").setProperty("/system", valueSelectedSystem);
          // var valueRangeTypeText = oView.byId("filterRangeTypeText").getSelectedKey();
          // var	oComboBoxRangeTypeText = oView.byId("filterRangeTypeText");
          // if (valueRangeTypeText !== "") {
          // 	oComboBoxRangeTypeText.setSelectedKey("");
          // }

          // var valueRangeTypeText = oView.byId("filterRangeValueDesc").getSelectedKey();
          // var	oComboBoxRangeTypeText = oView.byId("filterRangeValueDesc");
          // if (valueRangeTypeText !== "") {
          // 	oComboBoxRangeTypeText.setSelectedKey("");
          // }

          // var valueSelectedSystem = this.byId("filterSystem").getSelectedKey();
          // if (valueSelectedSystem === "ALL") {
          // 	this.onFilterChange();
          // }
        },

        onRangeTypeTextSelectionChange: function (oEventChangeRange) {
          var oView = this.getView();

          var valueRangeTypeText = oView
            .byId("filterRangeTypeText")
            .getSelectedKey();
          var oComboBoxRangeTypeText = oView.byId("filterRangeValueDesc");
          if (valueRangeTypeText !== "") {
            oComboBoxRangeTypeText.setSelectedKey("");
          }

          var sPeriod = oView.byId("filterRangeTypeText").getSelectedKey();
          var oFilter = new sap.ui.model.Filter(
            "PERIOD",
            sap.ui.model.FilterOperator.EQ,
            sPeriod
          );
          oComboBoxRangeTypeText
            .getBinding("items")
            .filter(oFilter, FilterType.Application);
        },

        onRangeTypeDescSelectionChange: function (oEventChange) {
          this.onFilterChange();
        },

        onSliderPercentChange: function (oEvent) {
          this.onFilterChange();
        },

        getCustomPathForLineChart: function (
          system,
          rangeType,
          rangeValue,
          percent,
          trendLength
        ) {
          var oFilters = [];
          if (rangeValue > trendLength) {
            var fromValue = rangeValue - trendLength;
            if (rangeType === "ANNUAL") {
              var oFilterSystem = new sap.ui.model.Filter(
                "SYSTEM",
                sap.ui.model.FilterOperator.EQ,
                system
              );
              var oFilterRangeTypeText = new sap.ui.model.Filter(
                "RANGETYPETEXT",
                sap.ui.model.FilterOperator.EQ,
                rangeType
              );
              var oFilterRangeValueGT = new sap.ui.model.Filter(
                "RANGEVALUE",
                sap.ui.model.FilterOperator.GT,
                fromValue
              );
              var oFilterRangeValueLE = new sap.ui.model.Filter(
                "RANGEVALUE",
                sap.ui.model.FilterOperator.LE,
                rangeValue
              );
              var oFilterFiscalYear = new sap.ui.model.Filter(
                "FISCALYEAR",
                sap.ui.model.FilterOperator.EQ,
                rangeValue
              );
              var oFilterfilterSimilarperc = new sap.ui.model.Filter(
                "SIMILARITYPOINT",
                sap.ui.model.FilterOperator.EQ,
                percent
              );
              oFilters.push(
                oFilterSystem,
                oFilterRangeTypeText,
                oFilterRangeValueGT,
                oFilterRangeValueLE,
                oFilterFiscalYear,
                oFilterfilterSimilarperc
              );
            } else {
              var oFilterSystem = new sap.ui.model.Filter(
                "SYSTEM",
                sap.ui.model.FilterOperator.EQ,
                system
              );
              var oFilterRangeTypeText = new sap.ui.model.Filter(
                "RANGETYPETEXT",
                sap.ui.model.FilterOperator.EQ,
                rangeType
              );
              var oFilterRangeValueGT = new sap.ui.model.Filter(
                "RANGEVALUE",
                sap.ui.model.FilterOperator.GT,
                fromValue
              );
              var oFilterRangeValueLE = new sap.ui.model.Filter(
                "RANGEVALUE",
                sap.ui.model.FilterOperator.LE,
                rangeValue
              );
              var oFilterfilterSimilarperc = new sap.ui.model.Filter(
                "SIMILARITYPOINT",
                sap.ui.model.FilterOperator.EQ,
                percent
              );
              oFilters.push(
                oFilterSystem,
                oFilterRangeTypeText,
                oFilterRangeValueGT,
                oFilterRangeValueLE,
                oFilterfilterSimilarperc
              );
            }
          } else {
            oFilters = this.getCustomPathForMultipleYears(
              system,
              rangeType,
              rangeValue,
              percent,
              trendLength,
              ""
            );
          }
          return oFilters;
        },

        getCustomPathForMultipleYears: function (
          system,
          rangeType,
          rangeValue,
          percent,
          trendLength,
          pathToAdd
        ) {
          var oFilters = [];
          var rangeMaxValue = 0;

          var oFilterSystem = new sap.ui.model.Filter(
            "SYSTEM",
            sap.ui.model.FilterOperator.EQ,
            system
          );
          var oFilterRangeTypeText = new sap.ui.model.Filter(
            "RANGETYPETEXT",
            sap.ui.model.FilterOperator.EQ,
            rangeType
          );
          var oFilterRangeValueGT = new sap.ui.model.Filter(
            "RANGEVALUE",
            sap.ui.model.FilterOperator.GT,
            1
          );
          var oFilterRangeValueLE = new sap.ui.model.Filter(
            "RANGEVALUE",
            sap.ui.model.FilterOperator.LE,
            rangeValue
          );
          var oFilterfilterSimilarperc = new sap.ui.model.Filter(
            "SIMILARITYPOINT",
            sap.ui.model.FilterOperator.EQ,
            percent
          );
          oFilters.push(
            oFilterSystem,
            oFilterRangeTypeText,
            oFilterRangeValueGT,
            oFilterRangeValueLE,
            oFilterfilterSimilarperc
          );

          switch (rangeType) {
            case "ANNUAL":
              var fiscalYearBefore = rangeValue - 1;
              break;
            case "QUARTER":
              rangeMaxValue = 4;
              break;
            case "MONTH":
              rangeMaxValue = 12;
              break;
            case "WEEK":
              rangeMaxValue = 52;
              break;
          }

          var nextLength = Math.abs(rangeValue - trendLength);

          if (nextLength > rangeMaxValue) {
            oFilters = this.getCustomPathForMultipleYears(
              system,
              rangeType,
              fiscalYearBefore,
              rangeMaxValue,
              percent,
              nextLength
            );
            //customPath + " or "
          } else {
            var fromValue = rangeMaxValue - nextLength;

            var oFilterSystem = new sap.ui.model.Filter(
              "SYSTEM",
              sap.ui.model.FilterOperator.EQ,
              system
            );
            var oFilterRangeTypeText = new sap.ui.model.Filter(
              "RANGETYPETEXT",
              sap.ui.model.FilterOperator.EQ,
              rangeType
            );
            var oFilterRangeValueGT = new sap.ui.model.Filter(
              "RANGEVALUE",
              sap.ui.model.FilterOperator.GT,
              fromValue
            );
            var oFilterRangeValueLE = new sap.ui.model.Filter(
              "RANGEVALUE",
              sap.ui.model.FilterOperator.LE,
              rangeMaxValue
            );
            var oFilterFiscalYear = new sap.ui.model.Filter(
              "FISCALYEAR",
              sap.ui.model.FilterOperator.EQ,
              fiscalYearBefore
            );
            var oFilterfilterSimilarperc = new sap.ui.model.Filter(
              "SIMILARITYPOINT",
              sap.ui.model.FilterOperator.EQ,
              percent
            );
            oFilters.push(
              oFilterSystem,
              oFilterRangeTypeText,
              oFilterRangeValueGT,
              oFilterRangeValueLE,
              oFilterfilterSimilarperc,
              oFilterFiscalYear
            );
          }
          return oFilters;
        },
      });
});
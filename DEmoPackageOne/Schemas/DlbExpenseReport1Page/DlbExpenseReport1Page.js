define("DlbExpenseReport1Page", [], function() {
	return {
		entitySchemaName: "DlbExpenseReport",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "DlbExpenseReportFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "DlbExpenseReport"
				}
			},
			"DlbSchema991737a1Detail482b293d": {
				"schemaName": "DlbSchema991737a1Detail",
				"entitySchemaName": "DlbDlbExpenseReportLine",
				"filter": {
					"detailColumn": "DlbDlbExpenseReport",
					"masterColumn": "Id"
				}
			},
			"VisaDetailV29008faba": {
				"schemaName": "VisaDetailV2",
				"entitySchemaName": "DlbExpenseReportVisa",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "DlbExpenseReport"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "DlbNameb368c728-dd8a-4b3b-a03f-50237742ce7c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "DlbName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIME1b8a008e-97cc-48a7-a462-f037accb8a84",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "DlbReportDate",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP4d59ad29-6294-47e4-b2b8-97284e948800",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "DlbContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP21780fd4-1888-4fa9-b88b-9ae551d48111",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "DlbExpenseReportStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabExpenseReportLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabExpenseReportLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DlbSchema991737a1Detail482b293d",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabExpenseReportLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "DlbNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "insert",
				"propertyName": "tabs",
				"parentName": "Tabs",
				"name": "Tab03f65b66TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabVisaCaption"
					},
					"items": []
				}
			},
			{
				"operation": "insert",
				"propertyName": "items",
				"parentName": "Tab03f65b66TabLabel",
				"name": "VisaDetailV29008faba",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				}
			}
		]/**SCHEMA_DIFF*/
	};
});

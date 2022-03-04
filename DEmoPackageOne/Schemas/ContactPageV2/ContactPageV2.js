define("ContactPageV2", ["ServiceHelper"], function(ServiceHelper) {
	return {
		entitySchemaName: "Contact",
		messages:{
			/**
			 * Published on: ContactSectionV2
			 * @tutorial https://academy.creatio.com/docs/developer/front-end_development/sandbox_component/module_message_exchange
			 */
			 "SectionActionClicked":{
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			}
		},
		attributes: {
			
			"Account": {
				lookupListConfig: {
					columns: ["Web", "Country", "Owner"]
				}
			},
			
			 "MyAttribute": {
				dependencies: [
					{
						columns: ["Name"],
						methodName: "onNameChanged"
					},
					{
						columns: ["Email"],
						methodName: "onEmailChanged"
					}
				]
			},

		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
				
			/**
			 * @inheritdoc Terrasoft.BasePageV2#init
			 * @overridden
			 */
			init: function() {
				this.callParent(arguments);
				this.subscribeToMessages();
			},

			subscribeToMessages: function(){
				this.sandbox.subscribe(
					"SectionActionClicked",
					function(){this.onSectionMessageReceived();},
					this,
					[this.sandbox.id]
				)
			},

			onSectionMessageReceived: function(){
				this.showInformationDialog("Message received");
			},

			/**
			 * @inheritdoc Terrasoft.BasePageV2#onEntityInitialized
			 * @overridden
			 * @protected
			 */
			 onEntityInitialized: function() {
				this.callParent(arguments);
			},

			onNameChanged: function(){
				var colUnderChange = arguments[1];
				var newValue = this.get(colUnderChange);
				//this.showInformationDialog("Name changed");
			},
			
			onEmailChanged: function(){
				var colUnderChange = arguments[1];
				var newValue = this.get(colUnderChange);
				//this.showInformationDialog("Name changed");
			},

			/**
			 * @inheritdoc Terrasoft.BaseSchemaViewModel#setValidationConfig
			 * @override
			 */
			 setValidationConfig: function() {
				this.callParent(arguments);
				this.addColumnValidator("Email", this.colEmailValidator);
			},


			colEmailValidator: function(){
				var invalidMessage = "";
				if(this.$Account.Web === this.$Email.split('@')[1]){
					invalidMessage = "";
				}else{
					invalidMessage = "Email domain do not match";
				}

				return {
					invalidMessage: invalidMessage
				};
			},

			/**
			 * @inheritdoc Terrasoft.BasePageV2#getActions
			 * @overridden
			 */
			 getActions: function() {
				var actionMenuItems = this.callParent(arguments);
				
				actionMenuItems.addItem(this.getButtonMenuSeparator());
				
				actionMenuItems.addItem(this.getButtonMenuItem({
					"Tag": "action1",
					"Caption": this.get("Resources.Strings.ActionOneCaption"),
					//"Caption": "Action 1",
					"Click": {"bindTo": "sendWebRequest"},
					ImageConfig: this.get("Resources.Images.CreatioSquare"),
				}));

				actionMenuItems.addItem(this.getButtonMenuItem({
					"Tag": "action2",
					"Caption": this.get("Resources.Strings.ActionTwoCaption"),
					//"Caption": "Action 2",
					"Click": {"bindTo": "onActionClick"},
					"Items": this.addSubItems()
				}));

				return actionMenuItems;	
			 },

			 onActionClick: function(tag){
				this.console.log("test")
			 },
			 
			 addSubItems: function(){
				var collection = this.Ext.create("Terrasoft.BaseViewModelCollection");
				collection.addItem(this.getButtonMenuItem({
					"Caption": this.get("Resources.Strings.SubActionOneCaption"),
					"Click": {"bindTo": "onSubActionOneClick"},
					"Tag": "sub1"
				}));
				collection.addItem(this.getButtonMenuItem({
					"Caption": this.get("Resources.Strings.SubActionTwoCaption"),
					"Click": {"bindTo": "onActionClick"},
					"Tag": "sub2"
				}));
				return collection;
			},
			onMyMainButtonClick: function(){
				this.showInformationDialog("Button clicked");
			},

			sendWebRequest: function(){

				//Payload
				var serviceData = {
					"person":{
						"name": "Kirill",
						"age": 40
					}
				};

				// Calling the web service and processing the results.
				// Can only execute/send POST requests
				//https://baseUrl/0/rest/CustomExample/PostMethodName
				ServiceHelper.callService(
					"DemoService", 				//CS - ClassName
					"PostMethodName", 				//CS Method
					function(response) 
					{
						var result = response;
						if(result){
							var name = result.name;
						}
						this.showInformationDialog(name);
					}, 
					serviceData, 
					this
				);
			}




		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "Age",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 3,
						"row": 2
					}
				}
			},
			{
				"operation": "insert",
				"name": "AgeTwo",
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"values": {
					"bindTo": "Age",
					"name": "Age",
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 3,
						"row": 3
					}
				}
			},
			{
				"operation": "insert",
				"name": "MyRedButton",
				"values": {
					"itemType": 5,
					"style": "red",
					"classes": {
						"textClass": [
							"actions-button-margin-right"
						],
						"wrapperClass": [
							"actions-button-margin-right"
						]
					},
					"caption": "Page red button",
					"hint": "Red btn hint goes here !!!",
					"click": {
						"bindTo": "onMyMainButtonClick"
					},
					"tag": "LeftContainer_Red"
				},
				"parentName": "LeftContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "MyGreenButton",
				"values": {
					"itemType": 5,
					"style": "green",
					"classes": {
						"textClass": [
							"actions-button-margin-right"
						],
						"wrapperClass": [
							"actions-button-margin-right"
						]
					},
					"caption": "Page Green button",
					"hint": "Page green button hint <a href=\"https://google.ca\" target=\"_blank\"> Link to help",
					"click": {
						"bindTo": "onMyMainButtonClick"
					},
					"tag": "LeftContainer_Green",
					"menu": {
						"items": [
							{
								"caption": "Sub Item 1",
								"click": {
									"bindTo": "onMySubButtonClick"
								},
								"visible": true,
								"hint": "Sub item 1 hint",
								"tag": "subItem1"
							},
							{
								"caption": "Sub Item 2",
								"click": {
									"bindTo": "onMySubButtonClick"
								},
								"visible": true,
								"hint": "Sub item 2 hint",
								"tag": "subItem2"
							}
						]
					}
				},
				"parentName": "LeftContainer",
				"propertyName": "items",
				"index": 8
			},
		]/**SCHEMA_DIFF*/
	};
});

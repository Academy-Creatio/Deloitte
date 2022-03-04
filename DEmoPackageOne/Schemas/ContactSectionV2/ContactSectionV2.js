define("ContactSectionV2", [], function() {
	return {
		entitySchemaName: "Contact",
		messages:{
			
			/**
			 * Subscribed on: ContactPageV2 
			 * @tutorial https://academy.creatio.com/docs/developer/front-end_development/sandbox_component/module_message_exchange
			 */
			"SectionActionClicked":{
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			}
		},
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "PrimaryContactButtonRed",
				"parentName": "CombinedModeActionButtonsCardLeftContainer", //INVISIBLE in section, visible on the page
				"propertyName": "items",
				"values":{
					itemType: this.Terrasoft.ViewItemType.BUTTON,
					style: Terrasoft.controls.ButtonEnums.style.RED,
					classes: {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					caption: "Section Red Button",
					hint: "Section red button hint",
					click: {"bindTo": "onMyMainButtonClick"},
					tag: "CombinedModeActionButtonsCardLeftContainer_Red"
				}
			},
			{
				"operation": "insert",
				"name": "PrimaryContactButtonGreen",
				"parentName": "SeparateModeActionButtonsLeftContainer", //visible in section but not on a page
				"propertyName": "items",
				"values":{
					itemType: this.Terrasoft.ViewItemType.BUTTON,
					style: Terrasoft.controls.ButtonEnums.style.GREEN,
					classes: {
						textClass: ["actions-button-margin-right"],
						wrapperClass: ["actions-button-margin-right"]
					},
					caption: "Section Green Button",
					hint: "Section red button hint",
					click: {"bindTo": "onMyMainButtonClick"},
					tag: "ActionButtonsContainer_Green"
				}
			},
		]/**SCHEMA_DIFF*/,
		methods: {

			onMyMainButtonClick: function(){
				this.sandbox.publish("SectionActionClicked", null, [this.sandbox.id+"_CardModuleV2"]);
			},

			getSectionActions: function() {
				var actionMenuItems = this.callParent(arguments);
				actionMenuItems.addItem(this.getButtonMenuSeparator());
				actionMenuItems.addItem(this.getButtonMenuItem({
					"Tag": "action1",
					"Caption": "Section Action One",
					"Click": {"bindTo": "onActionClick"},
				}));
				actionMenuItems.addItem(this.getButtonMenuItem({
					"Tag": "action2",
					"Caption": "Section Action Two",
					"Click": {"bindTo": "onActionClick"}
				}));
				return actionMenuItems;
			},

		}
	};
});

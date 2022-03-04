using Common.Logging;
using System.Linq;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace PackageThree.Files.cs.EventListener
{
	/// <summary>
	/// Listener for 'EntityName' entity events.
	/// </summary>
	/// <seealso cref="Terrasoft.Core.Entities.Events.BaseEntityEventListener" />
	[EntityEventListener(SchemaName = "DlbExpenseReport")]
	internal class ExpenseReportEventListener : BaseEntityEventListener
	{

		#region Methods : Public : OnSave
		public override void OnSaving(object sender, EntityBeforeEventArgs e)
		{
			base.OnSaving(sender, e);
			Entity entity = (Entity)sender;
			UserConnection userConnection = entity.UserConnection;
			entity.Validating += Entity_Validating;

			var logger = LogManager.GetLogger("Deloitte");
			string name = entity.GetTypedColumnValue<string>("DlbName");
			logger.Info($"Name in Clio: {name}");


			//entity.SetColumnValue("DlbName", "Some new Value");
			//var changedColumns = entity.GetChangedColumnValues();
			//string newName = entity.GetTypedColumnValue<string>("DlbName");
			//string oldName = entity.GetTypedOldColumnValue<string>("DlbName");

			//if(newName.Length < 4)
			//{
			//	e.IsCanceled = true;
			//}
		}

		private void Entity_Validating(object sender, EntityValidationEventArgs e)
		{
			
			Entity entity = (Entity)sender;
			UserConnection userConnection = entity.UserConnection;
			string newName = entity.GetTypedColumnValue<string>("DlbName");

			if (newName.Length < 4)
			{
				var evm = new EntityValidationMessage
				{
					Text = "Name must be greater than 3 characters long",
					MassageType = Terrasoft.Common.MessageType.Error,
					Column = entity.Schema.Columns.FindByName("DlbName")
				};
				entity.ValidationMessages.Add(evm);
			}
		}

		public override void OnSaved(object sender, EntityAfterEventArgs e)
		{
			base.OnSaved(sender, e);
			Entity entity = (Entity)sender;
			UserConnection userConnection = entity.UserConnection;

			//string name = entity.GetTypedColumnValue<string>("DlbName");
			
			


		}
		#endregion

		#region Methods : Public : OnInsert
		public override void OnInserting(object sender, EntityBeforeEventArgs e)
		{
			base.OnInserting(sender, e);
			Entity entity = (Entity)sender;
			UserConnection userConnection = entity.UserConnection;
		}
		public override void OnInserted(object sender, EntityAfterEventArgs e)
		{
			base.OnInserted(sender, e);
			Entity entity = (Entity)sender;
			UserConnection userConnection = entity.UserConnection;
		}
		#endregion

		#region Methods : Public : OnUpdate
		public override void OnUpdating(object sender, EntityBeforeEventArgs e)
		{
			base.OnUpdating(sender, e);
			Entity entity = (Entity)sender;
			UserConnection userConnection = entity.UserConnection;
		}
		public override void OnUpdated(object sender, EntityAfterEventArgs e)
		{
			base.OnUpdated(sender, e);
			Entity entity = (Entity)sender;
			UserConnection userConnection = entity.UserConnection;
		}
		#endregion

		#region Methods : Public : OnDelete
		public override void OnDeleting(object sender, EntityBeforeEventArgs e)
		{
			base.OnDeleting(sender, e);
			Entity entity = (Entity)sender;
			UserConnection userConnection = entity.UserConnection;
		}
		public override void OnDeleted(object sender, EntityAfterEventArgs e)
		{
			base.OnDeleted(sender, e);
			Entity entity = (Entity)sender;
			UserConnection userConnection = entity.UserConnection;
		}
		#endregion

	}
}

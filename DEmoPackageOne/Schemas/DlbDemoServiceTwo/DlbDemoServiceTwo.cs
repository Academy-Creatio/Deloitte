using System;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Web.SessionState;
using Terrasoft.Core;
using Terrasoft.Web.Common;

namespace PackageThree
{
	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class DemoServiceTwo : BaseService, IReadOnlySessionState
	{
		#region Properties
		private SystemUserConnection _systemUserConnection;
		private SystemUserConnection SystemUserConnection
		{
			get
			{
				return _systemUserConnection ?? (_systemUserConnection = (SystemUserConnection)AppConnection.SystemUserConnection);
			}
		}
		#endregion

		#region Methods : REST

		// http://k_krylov_n:8010/0/rest/DemoService/PostMethodName
		[OperationContract]
		[WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, 
			BodyStyle = WebMessageBodyStyle.WrappedRequest, ResponseFormat = WebMessageFormat.Json)]
		public PersonTwo PostMethodName(PersonTwo person)
		{
			UserConnection userConnection = UserConnection ?? SystemUserConnection;
			return new PersonTwo
			{
				Name = person.Name,
				Age = person.Age
			};
		}


		// http://k_krylov_n:8010/0/rest/DemoService/AnotherMethodname?age=50&age2=60
		[OperationContract]
		[WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, 
			BodyStyle = WebMessageBodyStyle.WrappedRequest, ResponseFormat = WebMessageFormat.Json)]
		public PersonTwo AnotherMethodname(int age, int age2)
		{
			UserConnection userConnection = UserConnection ?? SystemUserConnection;
			return new PersonTwo
			{
				Name = UserConnection.CurrentUser.Name,
				Age = age+age2
			};
		}

		#endregion

		#region Methods : Private

		#endregion
	}

	[DataContract]
	public class PersonTwo
	{
		[DataMember(Name = "name", Order = 0)]
		public string Name { get; set; }

		[DataMember(Name = "age", Order = 1)]
		public int Age { get; set; }
	}
}

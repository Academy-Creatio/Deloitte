using Common.Logging;
using PackageThree.Interfaces;
using Terrasoft.Core;
using Terrasoft.Core.Factories;

namespace PackageThree.Files.cs
{
	[DefaultBinding(typeof(ICalculator), Name = "v1")]
	public class Calculator : ICalculator
	{
		private readonly UserConnection _userConnaction;

		public Calculator(UserConnection userConnaction)
		{
			_userConnaction = userConnaction;
		}

		public int Add(int a, int b)
		{
			int result = a + b;
			var logger = LogManager.GetLogger("Deloitte");
			logger.Info($"Result of operation from Clio: {result.ToString()}, UserConnection name: {_userConnaction.CurrentUser.Name}");
			return result;
		}

		public int Sub(int a, int b)
		{
			return a - b;
		}
	}


	[DefaultBinding(typeof(ICalculator), Name ="v2")]
	public class CalculatorTwo : ICalculator
	{
		public int Add(int a, int b)
		{
			int result = a + b+100;
			var logger = LogManager.GetLogger("Deloitte");
			logger.Info($"Result of operation from Clio: {result.ToString()}");
			return result;

		}

		public int Sub(int a, int b)
		{
			return a - b;
		}
	}
}

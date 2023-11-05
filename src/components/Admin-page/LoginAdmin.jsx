import { Link } from "react-router-dom";

export default function LoginAdmin() {
  return (
    <div className="min-h-screen bg-darkBlue flex items-center justify-center flex-col">
      <h1 className="mb-24 text-white text-4xl -mt-52 -ml-2">
        iEnergyupproperty
      </h1>
      <div className="bg-white py-12 px-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-3 text-center">Admin Login</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
          </div>
          <Link
            to="/dashboard"
            type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-center text-white rounded-md hover:bg-blue-600"
          >
            Log In
          </Link>
        </form>
      </div>
    </div>
  );
}

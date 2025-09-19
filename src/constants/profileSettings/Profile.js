export default function Profile() {
  return (
    <div>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold text-primary font-roboto">
              Natashia Khaleira
            </h2>
            <p className="text-sm text-paragraph font-roboto">Admin</p>
            <p className="text-sm text-paragraph font-roboto">
              Leeds, United Kingdom
            </p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-xl shadow-sm mt-6 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-heading font-roboto">
              Personal Information
            </h3>
            <button className="px-3 py-1 text-sm bg-edit font-roboto text-white rounded-md hover:bg-edit">
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold font-roboto text-sm">First Name</p>
              <p className="font-roboto text-sm">Natashia</p>
            </div>
            <div>
              <p className="font-semibold font-roboto text-sm">Last Name</p>
              <p className="font-roboto text-sm">Khaleira</p>
            </div>
            <div>
              <p className="font-semibold font-roboto text-sm">Date of Birth</p>
              <p className="font-roboto text-sm">12-10-1990</p>
            </div>
            <div>
              <p className="font-semibold font-roboto text-sm">Email Address</p>
              <p>info@binary-fusion.com</p>
            </div>
            <div>
              <p className="font-semibold font-roboto text-sm">Phone Number</p>
              <p>(+62) 821 2554-5846</p>
            </div>
            <div>
              <p className="font-semibold font-roboto text-sm">User Role</p>
              <p>Admin</p>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-xl shadow-sm mt-6 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-heading font-roboto">
              Address
            </h3>
            <button className="px-3 py-1 text-sm font-roboto bg-edit text-white rounded-md hover:bg-edit">
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm ">
            <div>
              <p className="font-semibold font-roboto text-sm">Country</p>
              <p className="font-roboto text-sm"> United Kingdom</p>
            </div>
            <div>
              <p className="font-semibold font-roboto text-sm">City</p>
              <p className="font-roboto text-sm">Leeds, East London</p>
            </div>
            <div>
              <p className="font-semibold font-roboto text-sm">Postal Code</p>
              <p className="font-roboto text-sm">ERT 1254</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

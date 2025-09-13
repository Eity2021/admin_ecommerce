import product from "../../image/dashboard_product/product.png";
import product2 from "../../image/dashboard_product/product2.jpg";
import product3 from "../../image/dashboard_product/product3.jpg";
import product4 from "../../image/dashboard_product/product4.jpg";
import product5 from "../../image/dashboard_product/product5.jpg";

export default function HomeRecentOrdersList() {
  const products = [
    {
      id: 1,
      name: "Soft Fluffy Cats",
      productId: "#327",
      price: "$11.70",
      quantity: 28,
      sale: "On sale",
      revenue: "$328.85",
      status: "Not Available",
      image: product,
    },
    {
      id: 2,
      name: "Taste of the Wild Formula Finder",
      productId: "#380",
      price: "$8.99",
      quantity: 10,
      sale: "On sale",
      revenue: "$105.55",
      status: "Not Available",
      image: product2,
    },
    {
      id: 3,
      name: "Wellness Natural Food",
      productId: "#126",
      price: "$5.22",
      quantity: 578,
      sale: "--/--",
      revenue: "$202.87",
      status: "Not Available",
      image: product3,
    },
    {
      id: 4,
      name: "Dog Food Rachael Ray",
      productId: "#582",
      price: "$14.81",
      quantity: 36,
      sale: "--/--",
      revenue: "$475.22",
      status: "Available",
      image: product4,
    },
    {
      id: 5,
      name: "Best Buddy Bits Dog Treats",
      productId: "#293",
      price: "$6.48",
      quantity: 64,
      sale: "--/--",
      revenue: "$219.78",
      status: "Not Available",
      image: product5,
    },
  ];
  return (
    <div className="container mx-auto md:p-0 p-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-900 font-roboto">
            Product Overview
          </h1>
          <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 font-roboto">
            View all →
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 font-roboto">
                  Name
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 font-roboto">
                  Product ID
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 font-roboto">
                  Price
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 font-roboto">
                  Quantity
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 font-roboto">
                  Sale
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 font-roboto">
                  Revenue
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 font-roboto">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900 font-roboto">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600 font-roboto">
                    {product.productId}
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">
                    {product.price}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600 font-roboto">
                    {product.quantity}
                  </td>
                  <td className="py-3 px-4">
                    {product.sale === "On sale" ? (
                      <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 font-roboto">
                        On sale
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500 font-roboto">
                        {product.sale}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900 font-roboto">
                    {product.revenue}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 text-xs rounded font-roboto${
                        product.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">Showing 5 entries</p>
          <div className="flex items-center gap-2">
            <button className="h-8 w-8 flex items-center justify-center rounded hover:bg-gray-100">
              ←
            </button>
            <button className="h-8 w-8 flex items-center justify-center rounded bg-primary text-white">
              1
            </button>
            <button className="h-8 w-8 flex items-center justify-center rounded hover:bg-gray-100">
              2
            </button>
            <button className="h-8 w-8 flex items-center justify-center rounded hover:bg-gray-100">
              3
            </button>
            <button className="h-8 w-8 flex items-center justify-center rounded hover:bg-gray-100">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

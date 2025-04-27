import React from 'react'

export default function AttributeForm() {
  return (
<div className="max-w-4xl mx-auto bg-base-100 rounded-box p-8 border border-base-300">
      <form className="space-y-6">
        
        {/* Product Name */}
        <div>
          <label htmlFor="productName" className="label">
            <span className="label-text font-semibold">
              Product name <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            id="productName"
            placeholder="Enter category name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Upload Image */}
        <div>
          <label htmlFor="imageUpload" className="text-sm font-medium flex items-center gap-1">
            Upload images
            <span className="text-red-500">*</span>
          </label>
          <div className="mt-1.5 border-2 border-dashed border-blue-100 rounded-lg p-8">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="p-4 rounded-full bg-blue-50">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Drop your images here or select{' '}
                <span className="text-blue-500 hover:underline cursor-pointer">
                  click to browse
                </span>
              </p>
            </div>

          </div>
          </div>
        {/* Select Icon */}
        <div>
          <label htmlFor="categoryIcon" className="label">
            <span className="label-text font-semibold">Select category icon</span>
          </label>
          <select className="select select-bordered w-full" id="categoryIcon">
            <option disabled selected>Select icon</option>
            <option>🥫 Food</option>
            <option>🧸 Toy</option>
            <option>🎀 Accessory</option>
          </select>
        </div>

        {/* Save Button */}
        <button type="submit" className="btn btn-primary w-full">
          Save
        </button>

      </form>
    </div>
  )
}

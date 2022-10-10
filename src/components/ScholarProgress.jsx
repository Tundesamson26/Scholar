import React from 'react'

const ScholarProgress = () => {
  return (
    <div>
        <div>
              <h1>Scholar'sProgress</h1>
              <div>
                <h3>Progress Track for St. Peters High School</h3>
                <div>
                      <table className="table-fixed w-[800px] bg-[#F3EEE2] border-b-2 border-gray-200">
                          <thead className='bg-[#F3EEE2] border-b-2 border-gray-200'>
                              <tr>
                                  <th className='p-3 text-sm font-medium tracking-wide text-center'>Name</th>
                                  <th className='p-3 text-sm font-medium tracking-wide text-center'>Milestone Progress</th>
                                  <th className='p-3 text-sm font-medium tracking-wide text-center'>Contact</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>Akinyi Zawada</td>
                                  <td className='px-4 py-4 text-center'><div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                      <div class="bg-[#395241] h-2.5 rounded-full w-[65%]" ></div>
                                  </div></td>
                                  <td className='flex items-center'>More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                  </svg>
</td>
                              </tr>
                              <tr>
                                  <td>Witchy Woman</td>
                                  <td>The Eagles</td>
                                  <td>1972</td>
                              </tr>
                              <tr>
                                  <td>Shining Star</td>
                                  <td>Earth, Wind, and Fire</td>
                                  <td>1975</td>
                              </tr>
                          </tbody>
                      </table>
                </div>
              </div>
        </div>
    </div>
  )
}

export default ScholarProgress
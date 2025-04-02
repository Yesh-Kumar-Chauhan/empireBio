import React, { useState } from 'react'
import { saveAs } from 'file-saver';

const Resorce = () => {
  const resources = [
    {
      title: 'CleanRead™ Aqua ATP Detection Swab IFU (EN)',
      category: 'Instructions',
      language: 'English',
      url: 'pdf/Aqua_ATP_Detection Swab.pdf',
      name: 'Aqua_ATP_Detection Swab'
    },
    {
      title: 'CleanRead™ Surface ATP Detection Swab IFU (EN)',
      category: 'Instructions',
      language: 'English',
      url: 'pdf/Surface_ATP_Detection_Swab_rev.pdf',
      name: 'Surface_ATP_Detection_Swab_rev'
    },
    {
      title: 'CleanRead™ Surface Protein Detection Swab IFU (EN)',
      category: 'Instructions',
      language: 'English',
      url: 'pdf/Surface_ATP_Detection_Swab_rev.pdf',
      name: 'Surface_ATP_Detection_Swab_rev'
    },
    {
      title: 'CleanRead™ Handheld ATP Testing Device IFU (EN)',
      category: 'Instructions',
      language: 'English',
      url: 'pdf/Handheld_IFU_rev.pdf',
      name: 'Handheld_IFU_rev'
    },
    {
      title: 'Webinar_JUNE_10_2024_v2_revised',
      category: 'Instructions',
      language: 'English',
      url: 'pdf/Webinar_JUNE_10_2024_v2_revised.pptx',
      name: 'Webinar_JUNE_10_2024'
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // Filter resources based on search query
  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const downloadPdf = (url, name) => {
    // saveAs(url, `${name}.pdf`);
    const extension = url.split('.').pop();
    saveAs(url, `${name}.${extension}`);
  }

  return (
    <>
      <section className='siteBanner product_detail_banner'>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <div className='section_content banner_content h-auto'>
                <h2 class="mb-lg-4 mb-md-3 mb-3">Resource library</h2>
              </div>
              <div className='section_content'>
                <p class="mb-lg-4 mb-md-3 mb-3">Find product brochures, instruction manuals and guides available to download.</p>
              </div>
              <div className='search_box'>
                <div className='section_content'>
                  <p className='mb-2'><b>Search</b></p>
                  <form>
                    <div className='input_outer'>
                      <div className='search_icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M16.9284 17.04L20.4016 20.4M19.2816 11.44C19.2816 15.7699 15.7715 19.28 11.4416 19.28C7.11165 19.28 3.60156 15.7699 3.60156 11.44C3.60156 7.11009 7.11165 3.60001 11.4416 3.60001C15.7715 3.60001 19.2816 7.11009 19.2816 11.44Z" stroke="#AFB5BF" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </div>
                      <input type="search"
                        class="form-control"
                        id="search"
                        placeholder=""
                        value={searchQuery}
                        onChange={handleSearchChange}
                      />
                      {searchQuery && (
                        <div className='cross_icon' onClick={() => setSearchQuery('')}>
                          {/*cross icon SVG */}
                          <div className='cross_icon' onClick={clearSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M18 6L6 18M18 18L6 6" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" />
                            </svg>
                          </div>
                        </div>
                      )}
                      {/* <div className='cross_icon'  onClick={clearSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M18 6L6 18M18 18L6 6" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </div> */}
                    </div>
                  </form>
                </div>
              </div>

              <div className='resource_table overflow-auto mt-lg-4 mt-md-3 mt-3'>
                <table className='table mb-0'>
                  <thead>
                    <tr>
                      <th>
                        Title
                      </th>
                      <th className='text-center'>
                        Category
                      </th>
                      <th className='text-center'>
                        Language
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredResources.map((resource, index) => (
                      <tr key={index}>
                        <td>
                          <div className='section_content d-flex align-items-center'>
                            <img src='images/resource_table_icon.png' width='48px' height='48px' alt="icon" />
                            <p className='ps-lg-4 m-0 ps-md-3 ps-3'>{resource.title}</p>
                          </div>
                        </td>
                        <td className='text-center'>
                          <div className='section_content'>
                            <p className='m-0 text-center'>{resource.category}</p>
                          </div>
                        </td>
                        <td className='text-center'>
                          <div className='section_content'>
                            <p className='m-0 text-center'>{resource.language}</p>
                          </div>
                        </td>
                        <td className='text-center'>
                          <a className='section_content d-flex align-items-center gap-3 justify-content-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M3.60156 15.2198L3.60156 18.9257C3.60156 19.4873 3.82281 20.026 4.21664 20.4231C4.61046 20.8202 5.14461 21.0434 5.70156 21.0434H18.3016C18.8585 21.0434 19.3927 20.8202 19.7865 20.4231C20.1803 20.026 20.4016 19.4873 20.4016 18.9257V15.2198M12.0027 2.95663V14.9566M12.0027 14.9566L16.8027 10.3715M12.0027 14.9566L7.20273 10.3715" stroke="#027BCE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className='m-0 text-center' style={{ cursor: 'pointer' }} onClick={() => downloadPdf(resource.url, resource.name)}>Download</p>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resorce
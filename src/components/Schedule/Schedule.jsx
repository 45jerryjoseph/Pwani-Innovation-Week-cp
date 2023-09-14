import React from 'react'

const Schedule = () => {
  return (
    <>
        {/* <!-- Schedule --> */}
    <section id="schedule-section" className="schedule-section section">
      <div NamclassName="container">
        <h3 className="section-heading text-center mb-5">Schedule</h3>

        {/* <!-- Nav tabs --> */}
        <ul
          className="schedule-nav nav nav-pills nav-fill"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item me-2">
            <a
              className="nav-link active"
              id="tab-1"
              data-bs-toggle="tab"
              href="#tab-1-content"
              role="tab"
              aria-controls="tab-1-content"
              aria-selected="true"
            >
              <span class="heading">Day 1</span>
              <span class="meta">(Mon 2, Oct)</span>
            </a>
          </li>
          <li className="nav-item me-2">
            <a
              class="nav-link"
              id="tab-2"
              data-bs-toggle="tab"
              href="#tab-2-content"
              role="tab"
              aria-controls="tab-2-content"
              aria-selected="false"
            >
              <span class="heading">Day 2</span>
              <span class="meta">(Tue 3, Oct)</span>
            </a>
          </li>
          <li class="nav-item me-2">
            <a
              class="nav-link"
              id="tab-3"
              data-bs-toggle="tab"
              href="#tab-3-content"
              role="tab"
              aria-controls="tab-3-content"
              aria-selected="false"
            >
              <span className="heading">Day 3</span>
              <span className="meta">(Wed 4, Oct)</span>
            </a>
          </li>
          <li className="nav-item me-2">
            <a
              class="nav-link"
              id="tab-4"
              data-bs-toggle="tab"
              href="#tab-4-content"
              role="tab"
              aria-controls="tab-4-content"
              aria-selected="false"
            >
              <span className="heading">Day 4</span>
              <span className="meta">(Thu 5, Oct)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="tab-5"
              data-bs-toggle="tab"
              href="#tab-5-content"
              role="tab"
              aria-controls="tab-5-content"
              aria-selected="false"
            >
              <span className="heading">Day 5</span>
              <span className="meta">(Fri 6, Oct)</span>
            </a>
          </li>
        </ul>

        {/* <!-- Tab panes for Schedule -->s */}
        <div className="schedule-tab-content tab-content">
          {/* <!-- day 1 --> */}
          <div
            className="tab-pane active"
            id="tab-1-content"
            role="tabpanel"
            aria-labelledby="tab-1"
          >
            <h4 className="text-center py-5 text-muted">
              Day 1 Schedule Will be Updated Soon
            </h4>
          </div>

          {/* <!-- day 2 --> */}
          <div
            className="tab-pane no-timeline"
            id="tab-2-content"
            role="tabpanel"
            aria-labelledby="tab-2"
          >
            <h4 className="text-center py-5 text-muted">
              Day 2 Schedule Will be Updated Soon
            </h4>
          </div>

          {/* <!--day 3--> */}
          <div
            className="tab-pane no-timeline"
            id="tab-3-content"
            role="tabpanel"
            aria-labelledby="tab-3"
          >
            <h4 className="text-center py-5 text-muted">
              Day 3 Schedule Will be Updated Soon
            </h4>
          </div>

          {/* <!-- day 4 --> */}
          <div
            className="tab-pane no-timeline"
            id="tab-4-content"
            role="tabpanel"
            aria-labelledby="tab-4"
          >
            <h4 className="text-center py-5 text-muted">
              Day 4 Schedule Will be Updated Soon
            </h4>
          </div>

          {/* <!-- day 5 --> */}
          <div
            className="tab-pane no-timeline"
            id="tab-5-content"
            role="tabpanel"
            aria-labelledby="tab-5"
          >
            <h4 className="text-center py-5 text-muted">
              Day 5 Schedule Will be Updated Soon
            </h4>
          </div>
        </div>
        {/* <!--//schedule-tab-content--> */}
        <div className="schedule-cta text-center mx-auto">
          {/* <!-- <a
            href="#"
            class="btn btn-primary btn-lg me-md-2 d-block d-md-inline-block mb-3 mb-md-0"
            target="_blank"
            >Download Schedule</a
          > --> */}
          <a
            href="https://afritickets.events/2270-pwani-innovation-week"
            className="btn btn-secondary btn-lg d-block d-md-inline-block"
            
            >Buy Tickets</a
          >
        </div>
      </div>
      {/* <!--//container--> */}
    </section>
    </>
  )
}

export default Schedule
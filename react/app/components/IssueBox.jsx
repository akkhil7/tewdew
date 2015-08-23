import React from 'react'
import { Spring } from 'react-motion'
import { Link } from 'react-router'

class IssueBox extends React.Component {

  constructor () {
    super()    
  }

  render () {
    const { idx, issue } = this.props


    return (
      <div>
        <Spring defaultValue={{val: idx * -100}} endValue={{val: 0}}>
          {interpolated => 
            <div className="issue-box"
              style={{transform: `translate3d(0, ${interpolated.val}px, 0`}}>
              <Link to="issue" params={{issue_id: issue.id}}>
                {issue.title}
              </Link>
            </div>  
          }
        </Spring>
      </div>
    )
  }
}

module.exports = IssueBox;

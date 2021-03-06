import React from 'react'

import * as api from '../api'
import AddWidget from './AddWidget'
import WidgetList from './WidgetList'
import WidgetDetails from './WidgetDetails'
import ErrorMessage from './ErrorMessage'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      widgets: [],
      activeWidget: null,
      detailsVisible: false,
      addWidgetVisible: false
    }
  }

  componentDidMount () {
    api.getWidgets((err, widgets) => this.renderWidgets(err, widgets))
  }

  renderWidgets (err, widgets) {
    this.setState({
      error: err,
      widgets: widgets || []
    })
  }

  refreshList (err) {
    this.setState({
      error: err,
      addWidgetVisible: false
    })
    api.getWidgets(this.renderWidgets.bind(this))
  }

  showAddWidget () {
    this.setState({
      addWidgetVisible: true
    })
  }

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />
        <h1>Widgets FTW!</h1>
        <WidgetList
          showDetails={(widget) => this.showDetails(widget)}
          widgets={this.state.widgets} />
        <p><a href='#' onClick={(e) => this.showAddWidget(e)}>Add widget</a></p>
        {this.state.addWidgetVisible && <AddWidget
          finishAdd={(err) => this.refreshList(err)} />}
        {this.state.detailsVisible && <WidgetDetails
          isVisible={this.state.detailsVisible}
          hideDetails={() => this.hideDetails()}
          widget={this.state.activeWidget} />}
      </div>
    )
  }

  showDetails (widget) {
    this.setState({
      activeWidget: widget,
      detailsVisible: true
    })
  }

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }
}

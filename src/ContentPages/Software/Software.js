import React, {Component} from 'react';

class Software extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: "",
      commitCount: 0
    };
  }

  componentDidMount() {
    /*
    fetch("https://api.github.com/users/ennoente/repos")
      .then(response => response.json())
      .then(jsonData => {
        this.setState({
          repos: jsonData
        });
        console.log(jsonData);
      });
      */

    fetch("https://api.github.com/graphql", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "bearer f77a0338f1342308dc860f45d9b1093c1f448b34"
      },
      body: JSON.stringify({
        query: `query { SQLite4Web: repository(owner: ` + "ennoente" + `, name: "SQLite4Web") { name defaultBranchRef { name target { ... on Commit { id history(first: 0) { totalCount }}}}}}`
      })
    })
      .then(response => {
        return response.json();
      })
      .then(responseAsJson => {
        this.setState({
          repos: responseAsJson,
          commitCount: responseAsJson.data.SQLite4Web.defaultBranchRef.target.history.totalCount
        });
        console.log(responseAsJson);
      })
      .catch(reason => {
        console.log("FAIL: " + reason);
      });
  }

  render() {
    return (
      <div className={'content_container'}>
        Hi!!!!! <br/>
        {JSON.stringify(this.state.repos, null, 2)}
        <br/>
        <br/>
        Total commits on this branch: {this.state.commitCount}
      </div>
    )
  }
}

export default Software;
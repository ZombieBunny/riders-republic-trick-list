import React from "react";
import "./App.css";
import * as tricklist from "./trick-list.json";
import { Divider, TextField } from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";

// interface AutocompleteOption {
//   move: string;
//   Pc: string;
//   PlayStation: string;
//   Xbox: string;
// }
interface IState {
  selected: null | {
    move: string;
    Pc: string;
    Playstation: string;
    Xbox: string;
  };
}
interface IProps {}
class App extends React.Component<IProps, IState> {
  private tricks = JSON.parse(JSON.stringify(tricklist)).default;

  constructor(props: any) {
    super(props);
    this.state = { selected: null };
  }
  handleChange = (e: any) => {
    this.setState({ selected: e });
  };

  render() {
    let view;
    if (!!this.state.selected) {
      view = (
        <div className="result-container">
          <div className="column">
            <div className="row">
              <span>PC</span>
              <span>{this.state.selected?.Pc}</span>
            </div>
            <div className="row">
              <span>Playstation</span>
              <span>{this.state.selected?.Playstation}</span>
            </div>
            <div className="row">
              <span>Xbox</span>
              <span>{this.state.selected?.Xbox}</span>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <Autocomplete
            disablePortal
            autoHighlight
            id="combo-box-demo"
            options={this.tricks}
            sx={{ width: 300 }}
            onChange={(event, newValue) => {
              this.handleChange(newValue);
            }}
            getOptionLabel={(option: any) => option.move}
            renderInput={(params) => (
              <TextField
                variant="filled"
                {...params}
                label="Whats the trick called?"
              />
            )}
          />
          {view}
        </header>
      </div>
    );
  }
}

export default App;

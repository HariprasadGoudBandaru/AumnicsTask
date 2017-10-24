import React,{Component} from 'react';
import {Step,Stepper,StepLabel,} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';

const cities = [
  'Hyderabad',
  'Banglore',
  'Chennai',
  'Mumbai',
  'Pune',
  'Kolkata',
  'New Delhi',
  'Kochi',
];

const gender=['Male','Female'];
  
class UserRegister extends Component {
    
      state = {
        finished: false,
        stepIndex: 0,
        value: 0,
      };
      
    
      handleChange = (event, index, value) => this.setState({value});
    
      handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 2,
        });
      };
    
      handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
          this.setState({stepIndex: stepIndex - 1});
        }
      };
    
      getStepContent(stepIndex) {
        switch (stepIndex) {
          case 0:
            return (
                <div><center>
                    <TextField id="fn" hintText="First Name"/><br />
                    <TextField id="ln" hintText="Last Name"/><br />
                    </center><br/>
                </div>);
          case 1:
            return (<div><center>
                    <SelectField floatingLabelText="Job Title"
                        value={this.state.value}
                        onChange={this.handleChange}
                        >
                        <MenuItem value={1} primaryText="Software Engineer" />
                        <MenuItem value={2} primaryText="Software Developer" />
                        <MenuItem value={3} primaryText="Sr.Software Engineer" />
                        <MenuItem value={4} primaryText="QA Engineer" />
                        <MenuItem value={5} primaryText="Team Lead" />
                        </SelectField><br /><br />

                    <SelectField floatingLabelText="Company name"
                        value={this.state.value}
                        onChange={this.handleChange}
                        >
                        <MenuItem value={1} primaryText="Aumnics" />
                        <MenuItem value={2} primaryText="Capgemini" />
                        <MenuItem value={3} primaryText="Delloite" />
                        <MenuItem value={4} primaryText="Google" />
                        <MenuItem value={5} primaryText="Infosys" />
                        </SelectField>
                        <br /><br />
                    </center><br/>
                </div>);
          case 2:
            return (<div><center>
                <AutoComplete
                    floatingLabelText="Type Gender"
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={gender}
                    /><br />
                <AutoComplete
                    floatingLabelText="Type city name in INDIA"
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={cities}
                    /><br />
                </center><br/>
            </div>);          
        }
      }
    
      render() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};
    
        return (
          <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
            <div style={contentStyle}>
              {finished ? (
               <p>Registration Completed &nbsp;&nbsp;
                <Link className="btn btn-accent" to="/">Click here</Link>  
               </p>
              ) : (
                <div>
                  <div>{this.getStepContent(stepIndex)}</div>
                  <div style={{marginTop: 12}}>
                    <FlatButton
                      label="Back"
                      disabled={stepIndex === 0}
                      onClick={this.handlePrev}
                      style={{marginRight: 12}}
                    />

                    <RaisedButton style={{marginLeft:'255px'}}
                      label={stepIndex === 2 ? 'Finish' : 'Next'}
                      primary={true}
                      onClick={this.handleNext}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      }
    }
    
    export default UserRegister;
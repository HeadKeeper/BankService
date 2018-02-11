import React from "react"
import {Form, Field} from "react-final-form"
import {composeValidators, required, length, email} from "../../modules/App/Form/validators";
import {
  normalizePassportIdentityNumber,
  normalizePassportNumber,
  normalizePassportSeries,
  normalizePhone
} from "../../modules/App/Form/normalizer";

const ClientAdd = (props) => {
  const onSubmit = (data) => {
    props.processSubmit(data);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={props.data}
      render={({handleSubmit, submitting}) =>
        <form onSubmit={handleSubmit}>

          <Field
            name="surname"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="surname">Surname</label>
                <input {...input} type="text" id="surname"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>


          <Field
            name="name"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input {...input} type="text" id="name"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="patronymic"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="patronymic">Patronymic</label>
                <input {...input} type="text" id="patronymic"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>


          <Field
            name="birthday"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="birthday">Birthday</label>
                <input {...input} type="date" id="birthday"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="gender"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="gender">Gender</label>
                <select {...input} id="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>


          <Field
            name="passportSeries"
            validate={composeValidators(required, length(2))}
            parse={normalizePassportSeries}
            placeholder="XX"
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="passportSeries">Passport Series</label>
                <input {...input} type="text" id="passportSeries"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="passportNumber"
            validate={composeValidators(required, length(7))}
            parse={normalizePassportNumber}
            placeholder="9999999"
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="passportNumber">Passport Number</label>
                <input {...input} type="text" id="passportNumber"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>


          <Field
            name="passportGiver"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="passportGiver">Passport Giver</label>
                <input {...input} type="text" id="passportGiver"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>


          <Field
            name="passportCreationDate"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="passportCreationDate">Passport Creation Date</label>
                <input {...input} type="date" id="passportCreationDate"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>


          <Field
            name="passportIdentityNumber"
            validate={composeValidators(required, length(14))}
            parse={normalizePassportIdentityNumber}
            placeholder="9999999X999XX9"
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="passportIdentityNumber">Passport Identity Number</label>
                <input {...input} type="text" id="passportIdentityNumber"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="birthPlace"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="birthPlace">Birth Place</label>
                <input {...input} type="text" id="birthPlace"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="livingCity"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <div >Select from list</div>
                <label htmlFor="livingCity">Living City</label>
                <input {...input} type="text" id="livingCity"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="livingAddress"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="livingAddress">Living Address</label>
                <input {...input} type="text" id="livingAddress"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="registerCity"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <div >Select from list</div>
                <label htmlFor="registerCity">Register City</label>
                <input {...input} type="text" id="registerCity"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="registerAddress"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="registerAddress">Register Address</label>
                <input {...input} type="text" id="registerAddress"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="phoneHome"
            validate={composeValidators(required, length(15))}
            parse={normalizePhone}
            placeholder="80(17)XXX-XX-XX"
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="phoneHome">Home Phone</label>
                <input {...input} type="text" id="phoneHome"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="phoneMobile"
            validate={composeValidators(required, length(15))}
            parse={normalizePhone}
            placeholder="80(XX)XXX-XX-XX"
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="phoneMobile">Mobile Phone</label>
                <input {...input} type="text" id="phoneMobile"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="email"
            validate={email}
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input {...input} type="email" id="email"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="jobAddress"
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="jobAddress">Job Address</label>
                <input {...input} type="text" id="jobAddress"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>
          <Field
            name="jobPosition"
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="jobPosition">Job Position</label>
                <input {...input} type="text" id="jobPosition"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="monthlyIncome"
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="monthlyIncome">Monthly Income</label>
                <input {...input} type="number" id="monthlyIncome"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="martialStatus"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <div >Select from list</div>
                <label htmlFor="martialStatus">Martial Status</label>
                <input {...input} type="text" id="martialStatus"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="nationality"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <div >Select from list</div>
                <label htmlFor="nationality">Nationality</label>
                <input {...input} type="text" id="nationality"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="disability"
            validate={required}
          >
            {({input, meta}) =>
              <div className="field">
                <div >Select from list</div>
                <label htmlFor="disability">Disability</label>
                <input {...input} type="text" id="disability"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="pensioner"
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="pensioner">Pensioner</label>
                <input {...input} type="checkbox" id="pensioner"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="army"
          >
            {({input, meta}) =>
              <div className="field">
                <label htmlFor="army">Army</label>
                <input {...input} type="checkbox" id="army"/>
                {meta.error && meta.touched && <span className="field__error">{meta.error}</span>}
              </div>
            }
          </Field>

          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </form>
      }
    />)
};

export const ClientAddComponent = ClientAdd;

import axios from "axios";
import React, { useState, useEffect } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  // often kept in separate file
  person: yup
    .string()
    .required("Person name is required")
    .min(6, "Person name must be a minimum of 6 characters."),
  radiobtn: yup.string().oneOf(["tng", "stos"], "Show option is required."),
  dataOK: yup.boolean().oneOf([true], "Data OK?"),
  // dataOK: yup.boolean().oneOf([true, false], "Data OK?"),
  langChoice: yup
    .string()
    .oneOf(["1", "2", "3"], "Language selection is required."),
});

function App() {
  const [form, setForm] = useState({
    person: "",
    radiobtn: "",
    dataOK: false,
    langChoice: "",
  });
  const [errors, setErrors] = useState({
    person: "",
    radiobtn: "",
    dataOK: "",
    langChoice: "",
  });

  const [disabled, setDisabled] = useState(true);

  const setFormErrors = (name, val) => {
    yup
      .reach(schema, name)
      .validate(val) // reach inside schema for name
      .then(() => setErrors({ ...errors, [name]: "" })) // gets rid of validation error
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] })); // failed validation set to error in first position (just how yup works)
  };

  const changeForm = (e) => {
    const { checked, value, name, type } = e.target; // sets specific target to look at
    const usedVal = type === "checkbox" ? checked : value; // special target for checked box
    setFormErrors(name, usedVal);
    setForm({ ...form, [name]: usedVal }); // spread values from state and set to the value used by e.target above
  };

  useEffect(() => {
    schema.isValid(form).then((valid) => setDisabled(!valid)); // set disabled as true if form invalid
  }, [form]); // commpare schema against form

  const submit = (e) => {
    e.preventDefault();
    const newPerson = {
      person: form.person.trim(),
      radiobtn: form.radiobtn,
      dataOK: form.dataOK,
      langChoice: form.langChoice,
    };
    axios
      .post("https://reqres.in/api/users", newPerson)
      .then((res) => {
        setForm({
          person: "",
          radiobtn: "",
          dataOK: false,
          langChoice: "",
        })
      })
      .catch((err) => {
        debugger;
      })
  }

  return (
    <div className="App">
      {/* output errors */}
      <div style={{ color: "red " }}>
        <div>{errors.person}</div>
        <div>{errors.radiobtn}</div>
        <div>{errors.dataOK}</div>
        <div>{errors.langChoice}</div>
      </div>
      <form onSubmit={submit}>
        <label>
          Person
          <input
            onChange={changeForm}
            value={form.person}
            name="person"
            type="text"
          />
        </label>

        <label>
          TNG
          <input
            onChange={changeForm}
            checked={form.radiobtn === "tng"}
            value="tng"
            name="radiobtn"
            type="radio"
          />
        </label>

        <label>
          STOS
          <input
            onChange={changeForm}
            checked={form.radiobtn === "stos"}
            value="stos"
            name="radiobtn"
            type="radio"
          />
        </label>

        <label>
          Data
          <input
            onChange={changeForm}
            checked={form.dataOK}
            value={form.langChoice}
            name="dataOK"
            type="checkbox"
          />
        </label>

        <label>
          Language
          <select
            onChange={changeForm}
            value={form.langChoice}
            name="langChoice"
          >
            <option value="">Please Select</option>
            <option value="1">Java</option>
            <option value="2">Python</option>
            <option value="3">C</option>
          </select>
        </label>
        <button disabled={disabled}>submit</button>
      </form>
    </div>
  );
}

export default App;

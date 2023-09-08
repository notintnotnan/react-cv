import React from "react";
import titles from "../data/titles.js";
import SimpleRecord from "../components/SimpleRecord.js";
import DetailedRecord from "../components/DetailedRecord.js";
import RefLink from "../components/RefLink.js";
import SkillBar from "../components/SkillBar.js";
import DetailText from "../components/DetailText.js";

export default function Curriculum(props) {
  return (
    <>
      <div className="row">
        <div className="col text-center grid">
          <h2>{props.data["personalData"]["name"]}</h2>
          <div>
            <p className="m-0">
              {props.data["personalData"]["city"]},
              {props.data["personalData"]["country"]}
            </p>
            <p className="m-0">
              +({props.data["personalData"]["phone_id"]}){" "}
              {props.data["personalData"]["phone"]}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="columnHolder">
          <div className="columnBasics text-center">
            <div className="row ">
              <h4>{titles["personal"][props.lang]}</h4>
              {["city", "country", "phone", "email"].map((detail) => {
                if (detail === "phone") {
                  return (
                    <DetailText
                      id={props.data["personalData"]["phone_id"]}
                      detail={props.data["personalData"][detail]}
                    />
                  );
                } else {
                  return (
                    <DetailText detail={props.data["personalData"][detail]} />
                  );
                }
              })}
            </div>
            <div className="row">
              <h4>{titles["links"][props.lang]}</h4>
              {props.data["links"].map((item) => {
                return <RefLink url={item.url} name={item.name} />;
              })}
            </div>
            <div className="row">
              <h4>{titles["skills"][props.lang]}</h4>
              {props.data["skills"].map((item) => {
                return (
                  <SkillBar
                    value={item.level}
                    max={item.overall}
                    name={item.skill}
                    text={item.levelText}
                  />
                );
              })}
            </div>
            <div className="row">
              <h4>{titles["languages"][props.lang]}</h4>
              {props.data["languages"].map((item) => {
                return (
                  <SkillBar
                    value={item.level}
                    max={item.overall}
                    name={item.language}
                    text={item.levelText}
                  />
                );
              })}
            </div>
          </div>
          <div className="columnTexts">
            <div className="text-justify row">
              <h4>{titles["profile"][props.lang]}</h4>
              <p className="recordText">{props.data["profile"]}</p>
            </div>
            <div className="text-justify row">
              <h4>{titles["employment"][props.lang]}</h4>
              {props.data["experience"].map((item) => {
                return (
                  <DetailedRecord
                    employer={item["employer"]}
                    title={item["title"]}
                    city={item["city"]}
                    start={item["start"]}
                    end={item["end"]}
                    description={item["description"]}
                    lang={props.lang}
                  />
                );
              })}
            </div>
            <div className="text-justify row">
              <h4>{titles["education"][props.lang]}</h4>
              {props.data["education"].map((item) => {
                return (
                  <SimpleRecord
                    institution={item["institution"]}
                    degree={item["degree"]}
                    city={item["city"]}
                    start={item["start"]}
                    end={item["end"]}
                    lang={props.lang}
                  />
                );
              })}
            </div>
            <div className="text-justify row">
              <h4>{titles["courses"][props.lang]}</h4>
              {props.data["certifications"].map((item) => {
                return (
                  <SimpleRecord
                    institution={item["institution"]}
                    degree={item["certification"]}
                    city={item["platform"]}
                    start={item["start"]}
                    end={item["end"]}
                    lang={props.lang}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-secondary" onClick={props.langFun}>
          Es/En
        </button>
      </div>
    </>
  );
}

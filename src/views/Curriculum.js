import React from "react";

import titles from "../data/titles.js";

import SimpleRecord from "../components/SimpleRecord.js";
import DetailedRecord from "../components/DetailedRecord.js";
import RefLink from "../components/RefLink.js";
import SkillBar from "../components/SkillBar.js";
import DetailText from "../components/DetailText.js";
import SectionTitle from "../components/SectionTitle";

console.log(titles);

export default function Curriculum(props) {
  return (
    <>
      <div className="row sectionDiv">
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
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-secondary" onClick={props.langFun}>
            Es/En
          </button>
        </div>
        <hr></hr>
      </div>
      <div className="row">
        <div className="columnHolder">
          <div className="columnBasics">
            <div className="row sectionDiv">
              <SectionTitle
                name={titles["personalData"][props.lang]}
                icon={titles["personalData"]["icon"]}
              />
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
            <div className="row sectionDiv">
              <SectionTitle
                name={titles["links"][props.lang]}
                icon={titles["links"]["icon"]}
              />
              {props.data["links"].map((item) => {
                return <RefLink url={item.url} name={item.name} />;
              })}
            </div>
            <div className="row sectionDiv">
              <SectionTitle
                name={titles["skills"][props.lang]}
                icon={titles["skills"]["icon"]}
              />
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
            <div className="row sectionDiv">
              <SectionTitle
                name={titles["languages"][props.lang]}
                icon={titles["languages"]["icon"]}
              />
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
            <div className="row text-justify sectionDiv">
              <SectionTitle
                name={titles["profile"][props.lang]}
                icon={titles["profile"]["icon"]}
              />
              <p className="recordText">{props.data["profile"]}</p>
            </div>
            <div className="row text-justify sectionDiv">
              <SectionTitle
                name={titles["experience"][props.lang]}
                icon={titles["experience"]["icon"]}
              />
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
            <div className="row text-justify sectionDiv">
              <SectionTitle
                name={titles["education"][props.lang]}
                icon={titles["education"]["icon"]}
              />
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
            <div className="row text-justify sectionDiv">
              <SectionTitle
                name={titles["certifications"][props.lang]}
                icon={titles["certifications"]["icon"]}
              />
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
    </>
  );
}

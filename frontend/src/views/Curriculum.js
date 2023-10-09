import React, { useContext } from "react";
import { CurriculumContext, LanguageContext } from "../App.js";

import titles from "../data/titles.js";

import SimpleRecord from "../components/SimpleRecord.js";
import DetailedRecord from "../components/DetailedRecord.js";
import RefLink from "../components/RefLink.js";
import SkillBar from "../components/SkillBar.js";
import DetailText from "../components/DetailText.js";
import SectionTitle from "../components/SectionTitle";

export default function Curriculum() {
  const data = useContext(CurriculumContext);
  const [lang, langFun] = useContext(LanguageContext);

  return (
    <>
      <div className="d-flex flex-column">
        <div className="row columnMain">
          <div className="columnHolder">
            <div className="columnBasics">
              <div className="row sectionDiv">
                <SectionTitle
                  name={titles["personalData"][lang]}
                  icon={titles["personalData"]["icon"]}
                />
                {["city", "country", "phone", "email"].map((detail) => {
                  if (detail === "phone") {
                    return (
                      <DetailText
                        id={data["personalData"]["phone_id"]}
                        detail={data["personalData"][detail]}
                      />
                    );
                  } else {
                    return <DetailText detail={data["personalData"][detail]} />;
                  }
                })}
              </div>
              <div className="row sectionDiv">
                <SectionTitle
                  name={titles["links"][lang]}
                  icon={titles["links"]["icon"]}
                />
                {data["links"].map((item) => {
                  return <RefLink url={item.url} name={item.name} />;
                })}
              </div>
              <div className="row sectionDiv">
                <SectionTitle
                  name={titles["skills"][lang]}
                  icon={titles["skills"]["icon"]}
                />
                {data["skills"].map((item) => {
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
                  name={titles["languages"][lang]}
                  icon={titles["languages"]["icon"]}
                />
                {data["languages"].map((item) => {
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
                  name={titles["profile"][lang]}
                  icon={titles["profile"]["icon"]}
                />
                <p className="recordText">{data["profile"]}</p>
              </div>
              <div className="row text-justify sectionDiv">
                <SectionTitle
                  name={titles["experience"][lang]}
                  icon={titles["experience"]["icon"]}
                />
                {data["experience"].map((item) => {
                  return (
                    <DetailedRecord
                      employer={item["employer"]}
                      title={item["title"]}
                      city={item["city"]}
                      start={item["start"]}
                      end={item["end"]}
                      description={item["description"]}
                      lang={lang}
                    />
                  );
                })}
              </div>
              <div className="row text-justify sectionDiv">
                <SectionTitle
                  name={titles["education"][lang]}
                  icon={titles["education"]["icon"]}
                />
                {data["education"].map((item) => {
                  return (
                    <SimpleRecord
                      institution={item["institution"]}
                      degree={item["degree"]}
                      city={item["city"]}
                      start={item["start"]}
                      end={item["end"]}
                      lang={lang}
                    />
                  );
                })}
              </div>
              <div className="row text-justify sectionDiv">
                <SectionTitle
                  name={titles["certifications"][lang]}
                  icon={titles["certifications"]["icon"]}
                />
                {data["certifications"].map((item) => {
                  return (
                    <SimpleRecord
                      institution={item["institution"]}
                      degree={item["certification"]}
                      city={item["platform"]}
                      start={item["start"]}
                      end={item["end"]}
                      lang={lang}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

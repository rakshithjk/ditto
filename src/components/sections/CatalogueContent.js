import React from "react";
import { SectionTilesProps } from "../../utils/SectionProps";
import classNames from "classnames";
import Image from "../elements/Image";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const CatalogueContent = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Few Items we trade",
  };

  const priceClass = { color: "white" };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Cashew</h3>
                <p className="m-0">
                  All grades of Cashew from W180, W210, W240 to different
                  varieties of 2px, 4pc and Baby bits cashew.
                  <br /> Choose between growers from West coast - Mangaluru to
                  Kundapura or the East coast of Tamilnadu
                </p>

                <br />
                <p style={priceClass}>Prices starting from Rupees 300/- </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/cashew.png")}
                  alt="Features split 01"
                  width={400}
                  height={300}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Cardamom</h3>
                <p className="m-0">
                  All grades of Cardamom to suit your requirement, from yellow
                  to green. Procured directly from Sakleshpura
                </p>
                <br />
                <p style={priceClass}>Prices starting from Rupees 500/- </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/cardamom.png")}
                  alt="Features split 02"
                  width={400}
                  height={300}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Pepper</h3>
                <p className="m-0">
                  Top quality Pepper procured from the western ghats of
                  Sakleshpura and Chikamagaluru
                </p>
                <br />
                <p style={priceClass}>Prices starting from Rupees 500/- </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/pepper.png")}
                  alt="Features split 03"
                  width={400}
                  height={300}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Coffee</h3>
                <p className="m-0">
                  From top quality raw coffee beans to roasted, powdered beans,
                  all types of Coffee beans available. Procuredand processed
                  directly from farms of Western Ghats
                </p>
                <br />
                <p style={priceClass}>Prices starting from Rupees 400/- </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/coffee.png")}
                  alt="Features split 03"
                  width={400}
                  height={300}
                />
              </div>
            </div>

            <p style={{ display: "flex", "justify-content": "center" }}>
              {" "}
              Reach out to get the best deals with top quality guranteed.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

CatalogueContent.propTypes = propTypes;
CatalogueContent.defaultProps = defaultProps;

export default CatalogueContent;


/**
 * BSCE Dynamic Template Engine
 * Version 0.2
 */


function populateTemplate(template, data) {

  return template.replace(
    /{{(.*?)}}/g,
    function(match, key){

      key = key.trim();

      let value =
        getValueByPath(data, key);


      return formatTemplateValue(value);

    }
  );

}



function formatTemplateValue(value){


  if(value === null || value === undefined){

    return "";

  }


  if(Array.isArray(value)){


    return value
      .map(function(item){

        if(typeof item === "object"){

          return Object.entries(item)
            .map(function(entry){

              return entry[0] +
                ": " +
                entry[1];

            })
            .join(" | ");

        }


        return item;

      })
      .join("\n");

  }


  if(typeof value === "object"){

    return Object.entries(value)
      .map(function(entry){

        return entry[0] +
          ": " +
          entry[1];

      })
      .join("\n");

  }


  return value;

}

function getValueByPath(object, path){

  return path
    .split(".")
    .reduce(
      function(current, property){

        return current
          ? current[property]
          : "";

      },
      object
    );

}

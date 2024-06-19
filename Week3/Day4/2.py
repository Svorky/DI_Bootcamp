# Exercise 2: Working With JSON
import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

json_data = json.loads(sampleJson)

print(json_data["company"]["employee"]["payable"]["salary"])

json_data["company"]["employee"]["birth_date"] = "01/01/2000"

import os
__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))

with open(os.path.join(__location__, 'company.json'), mode="w") as file:
    json.dump(json_data, file)
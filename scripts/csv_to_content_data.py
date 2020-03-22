#!/usr/bin/env python3
import json
import csv
import sys



def convert(f_in, f_out):

    data = {}

    with open(f_in) as csv_file:
        csv_reader = csv.DictReader(csv_file, delimiter=";")
        #print(csv_reader.fieldnames)

        resources_dict = {}
        for rows in csv_reader:
            # Read id and split in number and language
            full_id = rows['id']
            full_id = full_id.split(sep=":")
            id_num = full_id[0]
            id_lang = full_id[1]

            if  not id_lang in resources_dict:
                resources_dict[id_lang] = {'translations' : {}}

            # Read title
            title = rows['title']
            # Read description and image
            desc = rows['description']
            img = rows['image']

            line_content_dict = {'title' + id_num : title, 'description' + id_num : desc, 'imageUrl' + id_num : img}

            lang_dict = resources_dict[id_lang]
            lang_dict['translations'].update(line_content_dict)

        # Write JSON
        with open(f_out, 'w') as json_file:
            #data = {'resources':[{'name': 'Scott', 'website': 'stackabuse.com', 'from': 'Nebraska'}]}
            data = {'resources':{'name': 'Scott', 'website': 'stackabuse.com', 'from': 'Nebraska'}}
            #print(json.dumps(data, indent=4))
            json.dump(resources_dict, json_file, indent=4)



if __name__ == "__main__":
    # Check for args
    if len(sys.argv) < 3:
        print("Please give input and output filename.")
        sys.exit()
    # Read input args
    f_in = sys.argv[1]
    f_out = sys.argv[2]

    # Do csv to content data conversion
    convert(f_in, f_out)
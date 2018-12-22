import requests
import re

def get_http_equiv_tags(url):
    resp = requests.get(url)
    _meta_tags = re.findall(r'<meta http-equiv=(.*) content=(.*)>', resp.text)
    meta_tags = []
    for tag in _meta_tags:
        meta_tags.append(
            [
                tag[0].replace('"', ''),
                tag[1].replace('"', '')
                ]
            )
    return meta_tags
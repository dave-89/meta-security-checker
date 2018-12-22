# HTTP-EQUIV  Security Meta tags checker [![Build Status](https://travis-ci.com/dave-89/meta-security-checker.svg?branch=master)](https://travis-ci.com/dave-89/meta-security-checker)

Largerly inspired by Scott Helme's *securityheaders.com*, this tool checks the security of web pages serving security instructions through HTML meta tags instead of HTTP headers, e.g.

```
<meta http-equiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains">
```

While the usage of headers is usually preferrable, it's not always possible to serve custom security headers when using third-party static server, like *github pages*.

This tool is still at a very initial stage and its results should be always validated by **human** security professionals.
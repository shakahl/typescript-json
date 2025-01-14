# Benchmark of `typescript-json`
> CPU: 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz
> Memory: 16,218 MB
> NodeJS version: v18.4.0
> TypeScript-JSON version: 3.3.8


## valiadate
 Components | typescript-json | io-ts | zod 
------------|-----------------|-------|-----
object (hierarchical) | 14331.255728689275 | 3807.777368227055 | 414.8270787343635
object (recursive) | 10799.172215224042 | 1628.4722222222222 | 74.27735089645078
object (union, explicit) | 2991.818181818182 | 1102.9331390052832 | 30.884502923976605
object (union, implicit) | 2732.98239244872 | 748.5431749955853 | 48.030018761726076
array (recursive) | 767.2318466642093 | 147.16703458425312 | 9.155455904334827
array (union, explicit) | 1262.4542124542124 | 70.54610564010743 | 2.61437908496732
array (union, implicit) | 1304.331797235023 | 92.22871304655692 | 3.203920090463626
ultimate union | 127.20225510923186 | Failed | Failed


```mermaid
pie title valiadate - object (hierarchical)
  "typescript-json": 14331.255728689275
  "io-ts": 3807.777368227055
  "zod": 414.8270787343635
```


```mermaid
pie title valiadate - object (recursive)
  "typescript-json": 10799.172215224042
  "io-ts": 1628.4722222222222
  "zod": 74.27735089645078
```


```mermaid
pie title valiadate - object (union, explicit)
  "typescript-json": 2991.818181818182
  "io-ts": 1102.9331390052832
  "zod": 30.884502923976605
```


```mermaid
pie title valiadate - object (union, implicit)
  "typescript-json": 2732.98239244872
  "io-ts": 748.5431749955853
  "zod": 48.030018761726076
```


```mermaid
pie title valiadate - array (recursive)
  "typescript-json": 767.2318466642093
  "io-ts": 147.16703458425312
  "zod": 9.155455904334827
```


```mermaid
pie title valiadate - array (union, explicit)
  "typescript-json": 1262.4542124542124
  "io-ts": 70.54610564010743
  "zod": 2.61437908496732
```


```mermaid
pie title valiadate - array (union, implicit)
  "typescript-json": 1304.331797235023
  "io-ts": 92.22871304655692
  "zod": 3.203920090463626
```


```mermaid
pie title valiadate - ultimate union
  "typescript-json": 127.20225510923186
  "io-ts": 18.37757564507147
  "zod": 0.34153005464480873
```






## is
Components | typescript-json | io-ts | zod | ajv 
------------|-----------------|-------|-----|-----
object (hierarchical) | 100176.57958124884 | 8348.888888888889 | 367.44873452798817 | 74891.06949945985
object (recursive) | 68966.84250188395 | 4258.445332364693 | 72.4611492591254 | Failed
object (union, explicit) | 14400.255288110868 | 3229.1589477584293 | 31.431244153414408 | 1178.9798511526592
object (union, implicit) | 11591.528545119705 | 3056.7905847188495 | 46.7479674796748 | Failed
array (recursive) | 4755.799316669664 | 474.3542435424354 | 9.174311926605505 | Failed
array (union, explicit) | 3080.1625415589215 | 368 | 2.6271345468192906 | Failed
array (union, implicit) | 2962.3015873015875 | 418.42788283277713 | 3.3936651583710407 | Failed
ultimate union | 566.2847790507366 | Failed | Failed | Failed


```mermaid
pie title is - object (hierarchical)
  "typescript-json": 100176.57958124884
  "io-ts": 8348.888888888889
  "zod": 367.44873452798817
  "ajv": 74891.06949945985
```


```mermaid
pie title is - object (recursive)
  "typescript-json": 68966.84250188395
  "io-ts": 4258.445332364693
  "zod": 72.4611492591254
  "ajv": 0
```


```mermaid
pie title is - object (union, explicit)
  "typescript-json": 14400.255288110868
  "io-ts": 3229.1589477584293
  "zod": 31.431244153414408
  "ajv": 1178.9798511526592
```


```mermaid
pie title is - object (union, implicit)
  "typescript-json": 11591.528545119705
  "io-ts": 3056.7905847188495
  "zod": 46.7479674796748
  "ajv": 0
```


```mermaid
pie title is - array (recursive)
  "typescript-json": 4755.799316669664
  "io-ts": 474.3542435424354
  "zod": 9.174311926605505
  "ajv": 0
```


```mermaid
pie title is - array (union, explicit)
  "typescript-json": 3080.1625415589215
  "io-ts": 368
  "zod": 2.6271345468192906
  "ajv": 0
```


```mermaid
pie title is - array (union, implicit)
  "typescript-json": 2962.3015873015875
  "io-ts": 418.42788283277713
  "zod": 3.3936651583710407
  "ajv": 0
```


```mermaid
pie title is - ultimate union
  "typescript-json": 566.2847790507366
  "io-ts": 0
  "zod": 0
  "ajv": 0
```






## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 84984.98443508515 | 28.56612873307364 | 6743.75698844577
object (hierarchical) | 5087.272727272727 | 10.796723752792257 | 1772.1351708514255
object (recursive) | 4274.475216087494 | 59.32996443945349 | 1411.075411075411
object (union) | 1817.6727909011374 | 1.0891268832819023 | 985.8103061986558
array (hierarchical) | 123.93240050881337 | 10.04277478147666 | 69.0602674482506
array (recursive) | 233.3021515434986 | 41.98402377856214 | 137.62971054068814
array (union) | 293.3136313261914 | 2.6012634708286884 | 281.811377245509
ultimate union | 119.94219653179192 | 0.1676727028839705 | 211.07981220657277


```mermaid
pie title optimizer - object (simple)
  "typescript-json": 84984.98443508515
  "fast-json-stringify": 28.56612873307364
  "JSON.stringify()": 6743.75698844577
```


```mermaid
pie title optimizer - object (hierarchical)
  "typescript-json": 5087.272727272727
  "fast-json-stringify": 10.796723752792257
  "JSON.stringify()": 1772.1351708514255
```


```mermaid
pie title optimizer - object (recursive)
  "typescript-json": 4274.475216087494
  "fast-json-stringify": 59.32996443945349
  "JSON.stringify()": 1411.075411075411
```


```mermaid
pie title optimizer - object (union)
  "typescript-json": 1817.6727909011374
  "fast-json-stringify": 1.0891268832819023
  "JSON.stringify()": 985.8103061986558
```


```mermaid
pie title optimizer - array (hierarchical)
  "typescript-json": 123.93240050881337
  "fast-json-stringify": 10.04277478147666
  "JSON.stringify()": 69.0602674482506
```


```mermaid
pie title optimizer - array (recursive)
  "typescript-json": 233.3021515434986
  "fast-json-stringify": 41.98402377856214
  "JSON.stringify()": 137.62971054068814
```


```mermaid
pie title optimizer - array (union)
  "typescript-json": 293.3136313261914
  "fast-json-stringify": 2.6012634708286884
  "JSON.stringify()": 281.811377245509
```


```mermaid
pie title optimizer - ultimate union
  "typescript-json": 119.94219653179192
  "fast-json-stringify": 0.1676727028839705
  "JSON.stringify()": 211.07981220657277
```






## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 86025.02334267039 | 26811.580711226958 | 6740.067466266866
object (hierarchical) | 4726.739926739927 | 4645.682451253482 | 1754.7134238310707
object (recursive) | 4847.188940092166 | 1392.1346190206089 | 1413.4288947566956
object (union) | 1847.9479298499368 | 1427.216344399854 | 977.6587887740029
array (hierarchical) | 317.66381766381767 | 441.74579985390795 | 177.82822550132425
array (recursive) | 243.4259954921112 | 135.54381490253235 | 129.83026363308053
array (union) | 313.6830719307734 | 249.95398490704952 | 283.6240855374226
ultimate union | 126.28170534268753 | 69.62469309014381 | 213.5706340378198


```mermaid
pie title stringify - object (simple)
  "typescript-json": 86025.02334267039
  "fast-json-stringify": 26811.580711226958
  "JSON.stringify()": 6740.067466266866
```


```mermaid
pie title stringify - object (hierarchical)
  "typescript-json": 4726.739926739927
  "fast-json-stringify": 4645.682451253482
  "JSON.stringify()": 1754.7134238310707
```


```mermaid
pie title stringify - object (recursive)
  "typescript-json": 4847.188940092166
  "fast-json-stringify": 1392.1346190206089
  "JSON.stringify()": 1413.4288947566956
```


```mermaid
pie title stringify - object (union)
  "typescript-json": 1847.9479298499368
  "fast-json-stringify": 1427.216344399854
  "JSON.stringify()": 977.6587887740029
```


```mermaid
pie title stringify - array (hierarchical)
  "typescript-json": 317.66381766381767
  "fast-json-stringify": 441.74579985390795
  "JSON.stringify()": 177.82822550132425
```


```mermaid
pie title stringify - array (recursive)
  "typescript-json": 243.4259954921112
  "fast-json-stringify": 135.54381490253235
  "JSON.stringify()": 129.83026363308053
```


```mermaid
pie title stringify - array (union)
  "typescript-json": 313.6830719307734
  "fast-json-stringify": 249.95398490704952
  "JSON.stringify()": 283.6240855374226
```


```mermaid
pie title stringify - ultimate union
  "typescript-json": 126.28170534268753
  "fast-json-stringify": 69.62469309014381
  "JSON.stringify()": 213.5706340378198
```







# Themenbereich: Bilanzierung Baukonstruktion (KG 300)
Thema: Systemgrenzen, Berechnungsformel, Austauschzyklen, Garage/Tiefgarage, Laubengang, Balkon, Rechenwerttabelle
Quelle: Folien 96–114, Audio 2025-12-09 10:45, Audio 2025-12-18 12:49
Status: Experten-geprüft V1.0

---

## Executive Summary
Die Baukonstruktion nach KG 300 (DIN 276) bildet den größten Teil der baulichen LCA-Bilanz. Alle Außen- und Innenbauteile inklusive sämtlicher Schichtaufbauten müssen bilanziert werden – auch energetisch nicht relevante Bauteile wie Innenwände, Fensterbänke oder Handläufe. Die zentrale Berechnungsformel BG₅₀ = f × m × (a + 1) gilt universell für alle Bauteile und Anlagentechnik. Besonders wichtig ist die korrekte Zuordnung der Datensätze aus der Rechenwerttabelle und der Nutzungsdauern aus der BBSR-Tabelle. Garagen und Tiefgaragen werden nur bilanziert, wenn sie "integriert" sind.

---

## 1. Systemgrenzen KG 300

### Regelwerk (Folien)
Die Systemgrenze der Baukonstruktion folgt der DIN 276 mit fünf Oberkategorien:

- **KG 320** – Gründung, Unterbau: Fundamente, Sauberkeitsschichten, Abdichtungen, Dränagen
- **KG 330** – Außenwände: Fenster, Putz-, Dämm- und Schutzschichten, Sonnenschutz
- **KG 340** – Innenwände: Putz-, Dämm- und Schutzschichten
- **KG 350** – Decken: Treppen, Balkone, Deckenbeläge (Estrich, Schutz-/Nutzschichten), Geländer, Handläufe, Leitern, Roste
- **KG 360** – Dächer: Dachstühle, Dämmungen, Dachfenster, Dachbeläge, Rinnen, Fallrohre

**Nicht in KG 300:** Möbel, Einbauküchen, nachträglich aufgelegte Teppiche/Läufer.

### Praxis-Expertise (Audio)
> **Wichtiger Praxishinweis:** Die Abgrenzung zwischen KG 310 (Baugrube) und KG 320 (Gründung) kann entscheidend sein. KG 310 (z.B. Böschungssicherungen, Injektionsverbau) muss NICHT bilanziert werden. KG 320 (Fundamente) dagegen schon. Bei komplizierten Projekten lohnt es sich, die DIN 276 im Original zu beschaffen und die Abgrenzung exakt vorzunehmen.

> **Häufiger Fehler:** Viele Energieberater vergessen, die Kiesschicht unter dem Fundament zu bilanzieren. Auch Dränagen gehören in die Bilanz.

---

## 2. Die zentrale Berechnungsformel

### Regelwerk (Folien)

**Formel für Neubau:**

```
BG₅₀ = f × m × (a + 1)

Ergebnis = BG₅₀ / (m² NRF × 50 Jahre)
```

| Variable | Bedeutung | Einheit | Quelle |
|----------|-----------|---------|--------|
| BG | Bilanzgröße (Herstellung, Erneuerung oder Entsorgung) | GWP/PENRT | – |
| f | Spezifischer GWP oder PENRT (= A1-A3 + C3-C4) | kg CO₂-Äqu. / MJ | Rechenwerttabelle |
| m | Menge des verbauten Materials | m³, m², kg | Planung/CAD |
| a | Austauschzyklus | – | BBSR-Tabelle / QNG-Handbuch |

**Wichtig:** Im letzten Jahr (Jahr 50) wird KEIN Austausch mehr angesetzt.

Pro Erneuerung wird einmal "Herstellung" (A1-A3) und einmal "Abfallbehandlung/Entsorgung" (C3-C4) bilanziert.

### Praxis-Expertise (Audio)
> **Zentrale Erkenntnis:** Diese Formel ist die "eierlegende Wollmilchsau". Sie kann ALLES berechnen: jeden Baustoff, jede Anlagentechnik, sowohl GWP als auch PENRT. Man MUSS diese Formel auswendig kennen – nicht nur für die Prüfung, sondern für die Praxis, weil man sonst Optimierungsmöglichkeiten nicht verstehen kann.

> **Praxisbeispiel Teppichboden (155 m²):**
> - A1-A3: 9,88 (aus Rechenwerttabelle)
> - C3-C4: 2,77 (aus Rechenwerttabelle)
> - Austauschzyklus: 4 (aus BBSR-Nutzungsdauertabelle)
> - f = 9,88 + 2,77 = 12,65
> - BG₅₀ = 12,65 × 155 m² × (4 + 1) = 9.803,75 kg CO₂
> - Ergebnis = 9.803,75 / (259 m² × 50) = **0,757 kg CO₂/(m²NRF·a)**
> - Das sind **3% des 24-kg-Kontingents** – nur für den Teppichboden!

> **Schockierender Vergleich:** 0,5 cm Teppichboden (0,01265 kg/m²NRF·a pro m²) hat fast denselben GWP wie 20 cm Stahlbetondecke (0,0176 kg/m²NRF·a pro m²). Bauchgefühl hilft NICHT – nur Fakten!

---

## 3. Austauschzyklen (Modul B4)

### Regelwerk (Folien)
Jede Bauteilschicht muss EINZELN bilanziert werden – keine Durchschnittswerte über den gesamten Schichtaufbau.

**Beispiel Stahlbetondecke + Teppich:**
- Stahlbetondecke: Austauschzyklus 0 → 1-malige Bilanzierung (Anfang + Ende)
- Teppichboden: Austauschzyklus 4 → 5-malige Bilanzierung (Modul B4)

**Ablauf bei Austauschzyklus 4 (Teppich):**
1. Errichtung: Herstellung Teppich (A1-A3)
2. 1. Austausch: Herstellung neuer Teppich (A1-A3) + Entsorgung alter Teppich (C3-C4)
3. 2. Austausch: dto.
4. 3. Austausch: dto.
5. 4. Austausch: dto.
6. End-of-Life: Entsorgung letzter Teppich (C3-C4)

### Datenquellen für Austauschzyklen:
- **Anlagentechnik:** Anhang 3.1.1 Bilanzierungsregeln QNG
- **Baustoffe:** BBSR-Tabelle "Nutzungsdauern von Bauteilen für Lebenszyklusanalysen nach BNB" (Stand 24.02.2017)

### Praxis-Expertise (Audio)
> **Häufiger Fehler:** Die Software setzt Nutzungsdauern NICHT automatisch korrekt. Man MUSS jeden einzelnen Baustoff manuell prüfen – sowohl die Datensatzzuordnung aus der Rechenwerttabelle als auch die Nutzungsdauer aus der BBSR-Tabelle. "Nur weil die Software keinen Fehler anzeigt, heißt das NICHT, dass der Wert korrekt ist!"

> **Wichtig:** Wenn ein Baustoff eine Lebensdauer von 48-49 Jahren hat, muss er trotzdem für die letzten 1-2 Jahre ausgetauscht werden. Es wird NICHT linear berechnet – der Austausch wird komplett bilanziert.

---

## 4. Garage, Tiefgarage und Parkhaus

### Regelwerk (Folien)
- Eine **Tiefgarage**, die in das Gebäude **integriert** ist → muss als Teil des Gebäudes in der LCA mitbewertet werden
- Eine **freistehende Garage** oder ein **Parkhaus** → wird **NICHT** in die Bewertung einbezogen, auch nicht wenn sie an das Gebäude angebaut sind
- **Carports** werden NICHT berücksichtigt (s. Definition NRF(R) – nicht allseitig umschlossen)

**Definition "integriert" (KfW-Insider-Info):**
> Wenn Bauteile geteilt werden, die für beide Gebäude gleichermaßen erforderlich sind und ohne die eines der beiden oder beide Bauwerke nicht mehr funktionstüchtig ist bzw. sind.

**Einfache Faustregel:** Garage und Gebäude fiktiv auseinanderreißen. Wenn die Garage ein Loch hat oder statisch zusammenfällt → sie war integriert → muss bilanziert werden. Wenn beide Gebäude noch funktionieren → nur angebaut → NICHT bilanzieren.

### Tiefgarage bei mehreren Gebäuden:
- Aufteilung der Baukonstruktion anhand des **Stellplatzschlüssels**
- Alle Flächen (Stellplätze + Fahrgassen) werden aufgeteilt

### Praxis-Expertise (Audio)
> **KfW-Insider-Info:** Diese Definition von "integriert" war lange Zeit Geheimwissen. Sie steht mittlerweile in den Technischen FAQs, ist aber vielen Energieberatern nicht bekannt. Die Definition gilt universell – nicht nur für Garagen, sondern für ALLE Gebäudeteile.

> **Optimierungs-Geheimtipp:** Eine integrierte Garage VERBESSERT die LCA-Bilanz in den meisten Fällen, obwohl mehr Material verbaut wird! Warum? Weil die unbeheizte Garagenfläche die Gesamt-NRF erhöht, ohne die beheizte Fläche zu vergrößern. Das senkt den GWP pro m². Details → siehe Block 28 (Optimierung Garagen-Fläche).

---

## 5. Laubengang, Balkon, Dachterrasse, Loggia

### Regelwerk (Folien)
**Grundregel: Schichtaufbau und Fläche getrennt betrachten!**

| Element | Schichtaufbau bilanzieren? | Fläche zur NRF(R)? |
|---------|---------------------------|---------------------|
| Balkon | ✅ Ja | ❌ Nein (nicht allseitig umschlossen) |
| Dachterrasse | ✅ Ja | ❌ Nein |
| Loggia | ✅ Ja | ❌ Nein |
| Laubengang | ✅ Ja | ⚠️ Nur Mindestbreite nach LBO |
| Außentreppe | ✅ Ja | ⚠️ Nur Mindestbreite nach LBO |

**Laubengang-Sonderregel:** Nur die **bauordnungsrechtlich geforderte Mindestbreite** darf für die NRF(R) berücksichtigt werden. Jeder cm darüber hinaus darf NICHT angerechnet werden.

**Treppen:** Fläche = Grundriss von oben (Vogelpersp ektive). Nur Mindestbreite anrechenbar.

### Praxis-Expertise (Audio)
> **Wichtiger Praxishinweis:** Flucht- und Rettungswege über Balkone, Dachterrassen etc. werden in NRF(R) NICHT berücksichtigt – auch nicht als Ausnahme. Das ist KfW-Geheimwissen, das nirgends offiziell steht.

> **Konsequenz für die LCA:** Balkone, Loggien etc. verschlechtern die LCA-Bilanz tendenziell, weil Material bilanziert wird (höherer CO₂-Fußabdruck) aber keine Fläche angerechnet werden darf. Das ist aber kein K.O.-Kriterium – man muss es nur an anderer Stelle ausgleichen.

---

## 6. Rechenwerttabelle – Anwendung und häufige Fragen

### Regelwerk (Folien)
- Die **Maßeinheit** des Bauproduktes (m², m³, kg) muss mit der Einheit aus der Rechenwerttabelle übereinstimmen. Anderenfalls sind **lineare Anpassungen** vorzunehmen.
- **Beispiel:** Gipsfaserplatte real 1,25 cm dick, in der Rechenwerttabelle nur mit 1,0 cm → Werte linear um Faktor 1,25 anpassen.
- Wenn ein Bauprodukt **nicht in der Rechenwerttabelle** enthalten ist → Verknüpfung mit einem anderen geeigneten Datensatz (maximale Übereinstimmung in Produktgruppe, Gewicht, Eignung, Einsatzort).
- Hilfsmittel: Begleitdokument **"Zuordnungsempfehlungen"**

### Praxis-Expertise (Audio)
> **Praxis-Workflow bei fehlenden Baustoffen:**
> 1. Zuerst in der **Excel-Rechenwerttabelle** suchen (~400 Baustoffe enthalten)
> 2. Nicht gefunden? → In den **Zuordnungsempfehlungen** nachschauen (~20 Seiten PDF)
> 3. Immer noch nicht gefunden? → **Eigene Zuordnung** nach bestem Wissen zum nächstpassenden Datensatz
>
> **Beispiel Kupfer:** Kupferblech ist weder in der Rechenwerttabelle noch in den Zuordnungsempfehlungen. Lösung: Einem passenden Metallprodukt aus der Rechenwerttabelle zuordnen. NICHT weglassen!

> **Häufiger Fehler:** Energieberater senden die Rechenwerttabelle an Kunden und sagen "such dir einen guten Dämmstoff aus". Das ist SINNLOS, weil die Rechenwerttabelle nur A1-A3 und C3-C4 zeigt – NICHT die Austauschzyklen (B4). Ein Teppichboden hat niedrigere A1-A3-Werte als Fliesen, ist aber durch 4 Austauschzyklen DEUTLICH schlechter.

---

## 7. Abbildungstiefe und Vernachlässigung (1%-Regel)

### Regelwerk (Folien)
**Vernachlässigt werden dürfen:**
- Vor-Ort/werksseitig verarbeitete Kleinstteile (Nägel, Dübel, Schrauben)
- Produktspezifische Kleinstmengen ≤ 1 kg

**1%-Regel:** Keine Berücksichtigung nötig, wenn GLEICHZEITIG:
- Unter 1% Masse UND
- Unter 1% Primärenergie nicht erneuerbar (PENRT) UND
- Kleiner 1% GWP₁₀₀

**5%-Obergrenze:** Die Gesamtvernachlässigung darf 5% Masse, 5% PENRT bzw. 5% GWP₁₀₀ des Gebäudes NICHT übersteigen.

### Praxis-Expertise (Audio)
> **VORSICHT – häufigster Berechnungsfehler:** Viele Energieberater prüfen nur die Masse (leicht abzuschätzen) und den GWP. Der PENRT wird oft vergessen! In der Praxis zeigt sich häufig, dass GWP bei 0,9% liegt (vernachlässigbar), aber PENRT bei 1,2% (NICHT vernachlässigbar). → Immer ALLE DREI Größen berechnen!

> **Paradoxon:** Um etwas zu vernachlässigen, muss man es erst komplett berechnen. Das ist in der Praxis oft mehr Aufwand als es einfach zu bilanzieren.

> **Empfehlung aus der Praxis:** Alles so detailliert wie möglich erfassen und einen Sicherheitspuffer bei der 5%-Regel behalten. Typischer Anwendungsfall für Vernachlässigung: Haustür-Komponenten (Verbundmaterial, viele Einzelteile schwer ermittelbar).

---

## Begriffs-Glossar

| Begriff | Definition |
|---------|-----------|
| KG 300 | Kostengruppe 300 nach DIN 276 – Baukonstruktionen |
| BG₅₀ | Bilanzgröße über 50 Jahre Betrachtungszeitraum |
| GWP | Global Warming Potential – Treibhauspotenzial in kg CO₂-Äquivalent |
| PENRT | Primary Energy Non-Renewable Total – Nicht erneuerbarer Primärenergieaufwand |
| NRF(R) | Netto-Raumfläche nach DIN 277:2021-08 (R = Raumumschließung) |
| Austauschzyklus | Anzahl der Austausche eines Bauteils innerhalb der 50 Jahre |
| Rechenwerttabelle | Offizielle Datentabelle mit GWP/PENRT-Werten für Bauprodukte (auf Basis ÖKOBAUDAT) |
| BBSR | Bundesinstitut für Bau-, Stadt- und Raumforschung |
| Integriert (Garage) | Bauteile werden geteilt, ohne die ein Bauwerk nicht funktionsfähig wäre |

---

## Wichtige Schlagworte
KG 300, Baukonstruktion, DIN 276, Systemgrenzen, Berechnungsformel, BG50, Austauschzyklus, Nutzungsdauer, Rechenwerttabelle, BBSR, Garage integriert, Tiefgarage, Stellplatzschlüssel, Laubengang, Balkon, Loggia, Dachterrasse, Abbildungstiefe, 1%-Regel, 5%-Regel, Vernachlässigung, Carport, NRF

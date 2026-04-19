# Themenbereich: PV-Anlagen Berechnung im Detail
Thema: Standort, Endenergiebedarf, Nutzerstrom, Stromertrag, Eigenverbrauch, Batterie, Peakleistungskoeffizient
Quelle: Folien 246–273, Audio 2025-12-18 12:49, Audio 2025-12-19 12:28
Status: Experten-geprüft V1.0

---

## Executive Summary
Die PV-Berechnung für die LCA unterscheidet sich fundamental von der GEG/BEG-Berechnung. Der spezifische Projektstandort (nicht Potsdam!), der Nutzerstrom, die Berücksichtigung von Batteriespeichern und die Berechnung nach DIN V 18599-9 Abschnitt 7.4.2 sind verpflichtend. Ohne PV-Anlage ist es praktisch unmöglich, den GWP-Grenzwert von 24 kg zu erreichen. Die PV-Anlage ist der mit Abstand größte Hebel in der LCA-Bilanz. Ein Batteriespeicher kann die LCA zusätzlich verbessern, aber ab einer bestimmten Größe kippt der Effekt.

---

## 1. Unterschiede PV-Berechnung: LCA vs. GEG/BEG

| Aspekt | LCA-Bilanzierung gem. QNG | GEG/BEG-Berechnung |
|--------|---------------------------|---------------------|
| **Standort** | Konkreter Projektstandort (15 Klimazonen) | Einheitlich Potsdam |
| **Eigenverbrauch** | DIN V 18599-9 Abschnitt 7.4.2 | Monatliche Gegenüberstellung |
| **Batteriespeicher** | ✅ Kann berücksichtigt werden | ❌ Darf NICHT berücksichtigt werden |
| **Nutzerstrom** | ✅ Pauschal berücksichtigt | ❌ Nicht berücksichtigt |
| **Peakleistungskoeffizient** | Norm ODER herstellerspezifisch | NUR Norm-Werte |
| **Verschattung** | Wie bei Effizienzhaus (einheitlich) | Wie bei Effizienzhaus |
| **Simulation** | ❌ NICHT zulässig | – |

### Praxis-Expertise (Audio)
> **Kernbotschaft:** "Jeder dieser drei Bereiche – GEG, BEG, LCA – basiert auf DIN 18599, aber jeder hat EIGENE Regeln. Man hätte das harmonisieren können, aber das wurde nicht gemacht. Deshalb braucht man für dieselbe PV-Anlage ZWEI verschiedene Berechnungen."

> **ACHTUNG – Häufiger Fehler:** Die PV-Berechnung aus der GEG/BEG-Bilanz (Effizienzhaus) darf NICHT für die LCA-Bilanzierung verwendet werden! Die Werte sind nicht übertragbar.

---

## 2. Die 5 Berechnungsschritte

### Schritt 1: Monatlicher Endenergiebedarf
- Aus der **GEG-Berechnung** (DIN 18599) übernehmen
- Nur Strom für **Heizung, Warmwasser, Lüftung, Kühlung, Hilfsenergien**
- Bei Wärmepumpe = kompletter Endenergiebedarf
- **Muss monatlich vorliegen** (Jahreswert NICHT verwendbar!)
- **Muss heizwertbezogen** sein (bei Strom: Heizwert = Brennwert)

### Schritt 2: Nutzerstrom berechnen und aufteilen
- 20 kWh/m² beheizte NRF pro Jahr
- **Gleichmäßig auf 12 Monate verteilen**
- Beispiel: 185,49 m² beheizte NRF × 20 = 3.709,8 kWh/a → 309,2 kWh/Monat

### Schritt 3: Stromertrag der PV-Anlage nach DIN V 18599-9
- Berechnung nach **spezifischem Projektstandort** (Klimazone)
- **Kein Ansatz** der Werte aus GEG-Berechnung oder Simulation!
- Monatlich berechnen
- Herstellerspezifischer Peakleistungskoeffizient erlaubt (siehe Falle!)

**Notwendige Parameter:**
- Standort (PLZ → Klimazone)
- Fläche und Peakleistungskoeffizient
- Ausrichtung (Azimuth)
- Neigung
- Verschattung
- Zelltyp (Mono-/Polykristallin)
- Modultechnologie (kristallin/amorph)
- Abschaltzeiten (WP / elektr. WW-Speicher)
- Belüftung (stark/mäßig/unbelüftet)

### Schritt 4: Eigenverbrauch/Einspeisung berechnen
- Nach **DIN V 18599-9 Abschnitt 7.4.2**
- Ggf. Batteriespeicher berücksichtigen (Batteriekorrekturfaktor fBatt)
- **Simulationen oder sonstige Berechnungen NICHT zulässig!**

### Schritt 5: GWP/PENRT aufteilen
- **Eigenverbrauch:** GWP-Abzug in Modul B6.1 (Betrieb) + anteilige PV-Herstellung/Entsorgung
- **Einspeisung:** Nur Ausweisung in Modul D2 (exportierte Energie) – kein GWP-Abzug!

---

## 3. Standort und Klimazonen

### Regelwerk
15 Klimazonen in Deutschland nach DIN V 18599 Teil 10.
**Referenzort Potsdam (Zone 4) ist für LCA NICHT zulässig!**

### Praxis-Expertise (Audio)
> **Auswirkung:** Je nach Region können die PV-Erträge um **±10%** von Potsdam abweichen. "Das ist nicht die dritte Nachkommastelle, das kann einen halben Kilogramm Unterschied machen – und über Förderfähigkeit entscheiden."

> **Hottgenroth:** PLZ im Projektdaten-Bereich eingeben → Klimazone wird automatisch zugeordnet. Andere Software: ggf. manuell zuordnen anhand der Karte.

> **Grenzgebiete:** Bei unklarer Zuordnung die Zone mit dem SCHLECHTEREN PV-Ertrag wählen → sichere Seite.

---

## 4. Die Peakleistungskoeffizienten-Falle

### Regelwerk (Folien)
Norm-Standardwerte nach DIN 18599-9, Tabelle 8.2:

| Zelltyp | Baujahr | κpk (kW/m²) | ≈ Effizienz |
|---------|---------|-------------|-------------|
| Monokristallin | bis 2016 | 0,135 | 13,5% |
| Monokristallin | **ab 2017** | **0,182** | **18,2%** |
| Polykristallin | bis 2016 | 0,125 | 12,5% |
| Polykristallin | ab 2017 | 0,166 | 16,6% |

**Für LCA:** Entweder Norm-Wert ODER herstellerspezifischer Wert erlaubt.
**Für GEG/Effizienzhaus:** NUR Norm-Wert erlaubt.

### Praxis-Expertise (Audio)
> **Die Falle:** Bei automatischer CAD-Verknüpfung (Hottgenroth) wird IMMER der herstellerspezifische Peakleistungskoeffizient verwendet.

> **Fall 1 – Hersteller SCHLECHTER als Norm (z.B. 17%):** Kein Problem. Software rechnet mit 17%, man könnte jederzeit auf 18,2% wechseln. Egal welches Modul am Ende verbaut wird – die LCA ist korrekt.

> **Fall 2 – Hersteller BESSER als Norm (z.B. 22%):** ⚠️ MÖGLICHES PROBLEM! Software rechnet mit 22% = mehr PV-Ertrag = bessere LCA. Aber: Wenn am Ende Module mit nur 20% Effizienz verbaut werden → LCA ist FALSCH → Förderung kann verloren gehen!

> **Empfehlung IWPro:** Module im CAD wählen, deren Effizienz bei ca. **18-18,5%** liegt. Dann bewegt man sich auf dem Niveau des Norm-Werts (18,2%) und ist unabhängig davon, welches Modul tatsächlich verbaut wird.

---

## 5. Belüftung der PV-Module

| DIN 18599 Bezeichnung | Hottgenroth PV-Planner | Typischer Fall |
|------------------------|------------------------|----------------|
| Stark belüftet/freistehend | Gute/sehr gute Hinterlüftung | Aufgeständerte Module, Freiflächenanlagen |
| **Mäßig belüftet** | **Mittlere Hinterlüftung** | **Standard: Aufdach-Montage** |
| Unbelüftet | Schlechte Hinterlüftung | In-Dach-Module, integrierte Dachziegel-PV |

---

## 6. Abschaltzeiten (Wärmepumpe)

### Optionen:
1. **Ohne Abschaltzeiten**
2. **Mit Abschaltzeiten ohne Kopplung an PV** (6+ Stunden, unabhängig von PV) ← **Standardfall**
3. **Kopplung an PV – Smart Grid Ready** (6+ Stunden, abhängig von PV-Verfügbarkeit)

### Praxis-Expertise (Audio)
> Bei Hottgenroth muss die Einstellung der Abschaltzeiten im **Energieberater** vorgenommen werden (nicht in ECO-CAD) – das ist umständlich und soll verbessert werden.

---

## 7. Eigenverbrauch und Einspeisung – Rechenbeispiel

### Ohne Batterie (30 m² PV Süd, Übungshaus):
- Jahresertrag: 4.077,8 kWh/a
- Selbst nutzbarer PV-Strom: 2.295,4 kWh/a
- Eingespeist: 1.782,5 kWh/a
- **Eigenverbrauchsanteil: 56,3%**

### Mit 5 kWh Batterie:
- Jahresertrag: 4.077,8 kWh/a (unverändert)
- Batteriekorrekturfaktor fBatt: 1,56
- Selbst nutzbarer PV-Strom: **3.589,0 kWh/a**
- Eingespeist: 488,9 kWh/a
- **Eigenverbrauchsanteil: 88%**
- → **+1.293,6 kWh/a** mehr Eigenverbrauch durch Batterie

### GWP-Auswirkungen:

| Komponente | GWP-Effekt |
|------------|------------|
| Eigenverbrauch 56,3% (ohne Batterie) | **-4,72** kg Abzug in B6 |
| PV-Herstellung/Entsorgung (56,3% Anteil) | **+0,81** kg |
| Einspeisung 43,7% | -3,79 kg (NUR Modul D2, kein Abzug!) |
| 5 kWh Batterie | **+0,30** kg |
| Zusätzlicher Eigenverbrauch durch Batterie | **-2,66** kg |

### Praxis-Expertise (Audio)
> **Batteriespeicher lohnt sich meistens:** "2,66 kg mehr Abzug durch höheren Eigenverbrauch minus 0,3 kg CO₂-Kosten für die Batterie = netto eine Verbesserung."

> **ABER:** "Ab einer bestimmten Größe der Batterie kehrt sich das ins Gegenteil! Wenn der Eigenverbrauchsanteil schon bei 90% liegt, bringt eine größere Batterie kaum noch Mehrwert, aber die CO₂-Kosten der Batterie steigen weiter."

> **Praxis-Tipp:** "Einfach ausprobieren – Batterie in der Software hinzufügen, schauen ob LCA besser oder schlechter wird. Trial and Error ist schneller als jede Berechnung."

> **Spätoptimierung:** "Batteriespeicher kann man auch sehr spät im Bauprojekt noch nachrüsten. Man braucht nur einen Technikraum und die Anschlüsse. Das ist ein Vorteil gegenüber Bauteilen, die früh entschieden werden müssen."

---

## 8. Eigenstromnutzung – KfW-Anforderungen

### Regelwerk
Für die Anrechnung von PV-Strom in der LCA müssen Stromverbraucher an die PV-Anlage angeschlossen sein, um den erzeugten Strom **physikalisch** im Gebäude zu nutzen.

**Konsequenzen:**
- ❌ **Volleinspeiseanlagen ausgeschlossen** – nur Überschusseinspeiseanlagen
- ✅ Gebäude muss technisch für direkte Nutzung ausgerüstet sein
- ❌ Stromverbraucher ohne PV-Anschluss dürfen NICHT angerechnet werden
- ✅ Mieterstrommodelle sind NICHT zwingend erforderlich
- ✅ Wichtig ist nur die **physikalische Nutzung** im Gebäude

### Praxis-Expertise (Audio)
> **KfW-Insider-Info:** "Die KfW hat gesagt, das Berechnungsmodell ist ihnen egal. Ob Mieterstrom oder nicht, ist irrelevant. Es geht nur darum: Fließt der PV-Strom physikalisch zu den Verbrauchern im Gebäude? Wenn ja → PV voll anrechenbar."

> **Solarpaket 2:** Hat die Möglichkeiten flexibler gemacht. Es gibt jetzt Modelle, bei denen PV-Strom physikalisch im Gebäude genutzt wird, aber die Abrechnung anders läuft.

> **Problem in der Praxis:** Viele Planer haben diese Anforderung nicht auf dem Schirm. Es stand lange nur versteckt in den Technischen FAQs.

---

## 9. Solar vs. PV – Überraschender Vergleich

| Anlage | Fläche | GWP-Einsparung |
|--------|--------|----------------|
| Vakuumröhrenkollektor (Warmwasser) | **5 m²** | **2,1 kg** |
| PV-Anlage (Süd, ohne Batterie) | **15 m²** | **1,95 kg** |

### Praxis-Expertise (Audio)
> **Überraschendes Ergebnis:** "5 m² Solaranlage sparen MEHR GWP als eine dreimal größere 15 m² PV-Anlage! Bei begrenzten Dachflächen ist eine MISCHUNG von Solar + PV deutlich vorteilhafter als nur PV."

> **Beispiel:** 20 m² nur PV → ca. 2,6-2,7 kg Einsparung. Aber: 5 m² Solar + 15 m² PV → **4 kg Einsparung**! Fast doppelt so viel.

---

## Begriffs-Glossar

| Begriff | Definition |
|---------|-----------|
| Eigenverbrauchsanteil | Anteil des PV-Stroms, der im Gebäude selbst genutzt wird |
| Einspeisung | Anteil des PV-Stroms, der ins Netz abgegeben wird (nur Modul D2) |
| Peakleistungskoeffizient (κpk) | Effizienz der PV-Module in kW/m² unter Standardbedingungen |
| Batteriekorrekturfaktor (fBatt) | Faktor zur Berechnung des erhöhten Eigenverbrauchs durch Batterie |
| BIPV | Building Integrated PV – gebäudeintegrierte Photovoltaik |
| Klimazone | Eine von 15 Regionen in Deutschland mit unterschiedlicher Sonneneinstrahlung |
| Volleinspeiseanlage | PV-Anlage, die 100% ins Netz einspeist – für LCA NICHT anrechenbar |

---

## Wichtige Schlagworte
PV-Anlage, Eigenverbrauch, Einspeisung, Batteriespeicher, Standort, Klimazone, Peakleistungskoeffizient, DIN 18599-9, Abschnitt 7.4.2, Nutzerstrom, Abschaltzeiten, Belüftung, Modul B6, Modul D2, Volleinspeise, Überschusseinspeisung, Solaranlage, Vakuumröhren, Mischung Solar PV

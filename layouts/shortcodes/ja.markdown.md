{{- $key := .Get "key" -}}
{{- $kanji := "" -}}
{{- $romaji := "" -}}
{{- $meaning := "" -}}
{{- if $key -}}
  {{- $entry := index site.Data.glossary $key -}}
  {{- if $entry -}}
    {{- $kanji = $entry.ja -}}
    {{- $romaji = $entry.romaji -}}
    {{- $meaning = .Get "en" | default $entry.en -}}
  {{- else -}}
    {{- errorf "Glossary key '%s' not found in data/glossary.yaml" $key -}}
  {{- end -}}
{{- else -}}
  {{- $kanji = .Get "term" | default (.Get 0) -}}
  {{- $romaji = .Get "romaji" | default (.Get 1) -}}
  {{- $meaning = .Get "en" | default (.Get 2) -}}
  {{- if and $kanji (not $meaning) -}}
    {{- range $k, $entry := site.Data.glossary -}}
      {{- if eq $entry.ja $kanji -}}
        {{- if not $romaji -}}{{- $romaji = $entry.romaji -}}{{- end -}}
        {{- $meaning = $entry.en -}}
      {{- end -}}
    {{- end -}}
  {{- end -}}
{{- end -}}
{{- partial "ai-term-plain.html" (dict "script" $kanji "romanization" $romaji "en" $meaning) -}}

{{- $key := .Get "key" -}}
{{- $thai := "" -}}
{{- $rtgs := "" -}}
{{- $meaning := "" -}}
{{- if $key -}}
  {{- $entry := index site.Data.thai_glossary $key -}}
  {{- if $entry -}}
    {{- $thai = $entry.th -}}
    {{- $rtgs = $entry.rtgs -}}
    {{- $meaning = .Get "en" | default $entry.en -}}
  {{- else -}}
    {{- errorf "Glossary key '%s' not found in data/thai_glossary.yaml" $key -}}
  {{- end -}}
{{- else -}}
  {{- $thai = .Get "term" | default (.Get 0) -}}
  {{- $rtgs = .Get "rtgs" | default (.Get 1) -}}
  {{- $meaning = .Get "en" | default (.Get 2) -}}
  {{- if and $thai (not $meaning) -}}
    {{- range $k, $entry := site.Data.thai_glossary -}}
      {{- if eq $entry.th $thai -}}
        {{- if not $rtgs -}}{{- $rtgs = $entry.rtgs -}}{{- end -}}
        {{- $meaning = $entry.en -}}
      {{- end -}}
    {{- end -}}
  {{- end -}}
{{- end -}}
{{- partial "ai-term-plain.html" (dict "script" $thai "romanization" $rtgs "en" $meaning) -}}

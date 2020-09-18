function normalize_answer(r){return function(r){return r.replace(/\s\s+/g," ").trim()}(function(r){var n=/\b(a|an|the)\b/g;return r.replace(n," ")}(function(r){return r.toLowerCase(r)}(function(r){var n=/[.^/|#*(\-=>:;?{&<[!'_+`)@$\]"~\\%},]/g;return r.replace(n,"")}(r))))}function compute_common(r,n){function e(r){var n={};return r.forEach(function(r){n[r]||(n[r]=0),n[r]+=1}),n}var t=e(r),a=e(n),o={};for(var u in t)if(a[u]){var c=Math.min(t[u],a[u]);o[u]=c}return o}function f1_score(r,n){if(""===n)return""===r?1:0;var e=normalize_answer(r).split(" "),t=normalize_answer(n).split(" "),a=compute_common(e,t),o=Object.keys(a).map(function(r){return a[r]}).reduce(function(r,n){return r+n},0);if(0===o)return 0;var u=1*o/e.length,c=1*o/t.length;return 2*u*c/(u+c)}function exact_match_score(r,n){return""===n?""===r?1:0:normalize_answer(r)===normalize_answer(n)}function metric_max_over_ground_truths(r,n,e){for(var t=[],a=0;a<e.length;a++){var o=r(n,e[a]);t.push(o)}return Math.max.apply(null,t)}function evaluate_on_metrics(r,n){return 0===n.length&&(n=[""]),[metric_max_over_ground_truths(exact_match_score,r,n),metric_max_over_ground_truths(f1_score,r,n)]}window.evaluate_on_metrics=evaluate_on_metrics;